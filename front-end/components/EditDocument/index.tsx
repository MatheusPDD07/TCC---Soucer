import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

import Select from 'components/Select'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLoading, FormWrapper } from 'components/Form'

import { useDoc } from 'hooks/use-docs'

import { convertFileToBase64 } from 'utils/convertFile'
import { FieldErrors, updateDocValidate } from 'utils/validations'

import * as S from './styles'

import { MdClose, MdTitle } from 'react-icons/md'

type TopicData = {
  id: string
  title: string
}

export type EditDocumentProps = {
  topics: TopicData[]
  id: string
  title: string
  urlDocument: string
  topicId: string
  keys: string
}

const EditDocument = ({
  id,
  keys,
  title,
  topicId,
  topics
}: EditDocumentProps) => {
  const router = useRouter()
  const [session] = useSession()

  const { updateDoc, studentUpdateDoc } = useDoc()
  const [isLoading, setIsLoading] = useState(false)
  const [udpateTags, setUpdateTags] = useState<any[]>(keys.split('; '))
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [selectedFile, setSelectedFile] = useState('')
  const [filePlaceholder, setFilePlaceholder] = useState(
    'Clique aqui e escolha um arquivo'
  )

  const [values, setValues] = useState({
    title: title,
    topicId: topicId
  })

  function handleKeyDownUpdate(e: any) {
    if (e.key !== 'Enter') return
    if (e.key === 'Enter') e.preventDefault()
    const value = e.currentTarget.value
    if (!value.trim()) return
    setUpdateTags([...udpateTags, value])
    e.target.value = ''
  }

  function removeUpdateTag(index: number) {
    setUpdateTags(udpateTags.filter((el, i) => i !== index))
  }

  const handleUpdateInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleChooseFile = async (event: any) => {
    const file = event.target.files[0]
    setFilePlaceholder(file.name)
    const base64: string = await convertFileToBase64(file)
    const newBase64 = base64.split(',')

    await setSelectedFile(newBase64[1])
  }

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const errors = updateDocValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setIsLoading(false)
      return
    }

    setFieldError({})

    if (session?.isAdmin) {
      await updateDoc(
        id,
        values.topicId,
        values.title,
        selectedFile,
        udpateTags.join('; ')
      )
    } else {
      await studentUpdateDoc(
        id,
        values.topicId,
        values.title,
        selectedFile,
        udpateTags.join('; ')
      )
    }
    router.reload()

    setIsLoading(false)
  }

  return (
    <S.Wrapper>
      <FormWrapper>
        <form onSubmit={handleUpdate}>
          <TextField
            name="title"
            mask={''}
            value={values.title}
            placeholder="Ex: Clean Code"
            type="text"
            label="Titulo"
            onInputChange={(v) => handleUpdateInput('title', v!)}
            icon={<MdTitle />}
            disabled={isLoading}
            error={fieldError?.title}
          />

          <Select
            items={topics}
            label="Categoria"
            name="topicId"
            value={values.topicId}
            initialValue="Escolha uma opção"
            disabled={isLoading}
            onSelectChange={(v) => handleUpdateInput('topicId', v!)}
            error={fieldError?.topicId}
          />

          <S.File>
            <label>Arquivo</label>
            <S.FileContainer>
              <input type="file" onChange={handleChooseFile} />
              <p>{filePlaceholder}</p>
            </S.FileContainer>
          </S.File>

          <S.TagContainer>
            {udpateTags.map((tag, index) => (
              <S.TagItem key={tag}>
                <S.TagText>{tag}</S.TagText>
                <S.CloseBox onClick={() => removeUpdateTag(index)}>
                  <MdClose />
                </S.CloseBox>
              </S.TagItem>
            ))}
            <input
              type="text"
              onKeyDown={handleKeyDownUpdate}
              placeholder="Digite as novas palavras-chave"
            />
          </S.TagContainer>
          <small>
            Para adicionar a palavra-chave é necessário apertar a tecla{' '}
            <kbd>Enter</kbd>.
          </small>

          <Button type="submit" size="large" fullWidth disabled={isLoading}>
            {isLoading ? <FormLoading /> : <span>Salvar Alterações</span>}
          </Button>
        </form>
      </FormWrapper>
    </S.Wrapper>
  )
}

export default EditDocument
