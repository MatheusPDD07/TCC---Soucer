import { useState } from 'react'
import { useRouter } from 'next/router'

import Select from 'components/Select'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLoading, FormWrapper } from 'components/Form'

import { useDoc } from 'hooks/use-docs'

import { MdClose, MdTitle } from 'react-icons/md'

import { convertFileToBase64 } from 'utils/convertFile'
import { addDocumentValidate, FieldErrors } from 'utils/validations'

import * as S from './styles'

type TopicData = {
  id: string
  title: string
}

export type AddDocumentProps = {
  topics: TopicData[]
}

const AddDocument = ({ topics }: AddDocumentProps) => {
  const router = useRouter()
  const { addDoc } = useDoc()

  const [tags, setTags] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [selectedFile, setSelectedFile] = useState('')
  const [filePlaceholder, setFilePlaceholder] = useState(
    'Clique aqui e escolha um arquivo'
  )

  const [addValues, setAddValues] = useState({
    title: '',
    topicId: ''
  })

  const handleKeyDown = (e: any) => {
    if (e.key !== 'Enter') return
    if (e.key === 'Enter') e.preventDefault()
    const value = e.currentTarget.value
    if (!value.trim()) return
    setTags([...tags, value])
    e.target.value = ''
  }

  const removeTag = (index: number) => {
    setTags(tags.filter((el, i) => i !== index))
  }

  const handleChooseFile = async (event: any) => {
    const file = event.target.files[0]
    setFilePlaceholder(file.name)
    const base64: string = await convertFileToBase64(file)
    const newBase64 = base64.split(',')

    await setSelectedFile(newBase64[1])
  }

  const handleAddInput = (field: string, value: string) => {
    setAddValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const errors = addDocumentValidate(addValues)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setIsLoading(false)
      return
    }

    setFieldError({})

    await addDoc(
      addValues.topicId,
      addValues.title,
      selectedFile,
      tags.join('; ')
    )
    setAddValues({ title: '', topicId: '' })
    setTags([])
    setSelectedFile('')
    setFilePlaceholder('Clique aqui e escolha um arquivo')
    router.reload()

    setIsLoading(false)
  }

  return (
    <S.Wrapper>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            mask={''}
            value={addValues.title}
            placeholder="Ex: Clean Code"
            type="text"
            label="Titulo"
            onInputChange={(v) => handleAddInput('title', v!)}
            icon={<MdTitle />}
            disabled={isLoading}
            error={fieldError?.title}
          />

          <Select
            items={topics}
            label="Categoria"
            name="topicId"
            value={addValues.topicId}
            initialValue="Escolha uma opção"
            disabled={isLoading}
            onSelectChange={(v) => handleAddInput('topicId', v!)}
            error={fieldError?.topicId}
          />

          <S.File>
            <label>Arquivo</label>
            <S.FileContainer>
              <input type="file" onChange={handleChooseFile} />
              <p>{filePlaceholder}</p>
            </S.FileContainer>
          </S.File>

          <S.Keys>
            <label>Palavras chave</label>
            <S.TagContainer>
              {tags.map((tag, index) => (
                <S.TagItem key={tag}>
                  <S.TagText>{tag}</S.TagText>
                  <S.CloseBox onClick={() => removeTag(index)}>
                    <MdClose />
                  </S.CloseBox>
                </S.TagItem>
              ))}
              <input
                type="text"
                onKeyDown={handleKeyDown}
                placeholder="Ex: desenvolvimento"
              />
            </S.TagContainer>
            <small>
              Para adicionar a palavra-chave é necessário apertar a tecla{' '}
              <kbd>Enter</kbd>.
            </small>
          </S.Keys>

          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? <FormLoading /> : <span>Adicionar Documento</span>}
          </Button>
        </form>
      </FormWrapper>
    </S.Wrapper>
  )
}

export default AddDocument
