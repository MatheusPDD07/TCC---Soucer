import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

import Select from 'components/Select'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLoading, FormWrapper } from 'components/Form'

import { useVideo } from 'hooks/use-video'

import { MdClose, MdOutlineAddLink, MdTitle } from 'react-icons/md'

import { convertFileToBase64 } from 'utils/convertFile'
import { FieldErrors, updateVideoValidate } from 'utils/validations'

import * as S from './styles'

type TopicData = {
  id: string
  title: string
}

export type EditVideoProps = {
  topics: TopicData[]
  id: string
  title: string
  urlVideo: string
  topicId: string
  keys: string
}

const EditVideo = ({
  topics,
  id,
  title,
  urlVideo,
  topicId,
  keys
}: EditVideoProps) => {
  const router = useRouter()
  const [session] = useSession()
  const { updateVideo, studentUpdateVideo } = useVideo()

  const [isLoading, setIsLoading] = useState(false)
  const [udpateTags, setUpdateTags] = useState<any[]>(keys.split('; '))
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [selectedFile, setSelectedFile] = useState('')
  const [filePlaceholder, setFilePlaceholder] = useState(
    'Clique aqui e escolha um arquivo'
  )

  const [values, setValues] = useState({
    title: title,
    urlVideo: urlVideo,
    topicId: topicId
  })

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

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const errors = updateVideoValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setIsLoading(false)
      return
    }

    setFieldError({})

    if (session?.isAdmin) {
      await updateVideo(
        id,
        values.topicId,
        values.title,
        values.urlVideo,
        udpateTags.join('; '),
        selectedFile
      )
    } else {
      await studentUpdateVideo(
        id,
        values.topicId,
        values.title,
        values.urlVideo,
        udpateTags.join('; '),
        selectedFile
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
            placeholder="Ex: Curso de Node.JS - O que é Node.JS #01"
            type="text"
            label="Título do Vídeo"
            onInputChange={(v) => handleUpdateInput('title', v!)}
            icon={<MdTitle />}
            disabled={isLoading}
            error={fieldError?.title}
          />

          <TextField
            name="urlVideo"
            mask={''}
            value={values.urlVideo}
            placeholder="Ex: https://www.youtube.com/watch?v=s"
            type="text"
            label="Link do Vídeo"
            onInputChange={(v) => handleUpdateInput('urlVideo', v!)}
            icon={<MdOutlineAddLink />}
            disabled={isLoading}
            error={fieldError?.urlVideo}
          />

          <Select
            items={topics}
            label="Categoria"
            name="topicId"
            value={values.topicId}
            initialValue="Selecione uma opção"
            disabled={isLoading}
            onSelectChange={(v) => handleUpdateInput('topicId', v!)}
            error={fieldError?.topicId}
          />

          <S.FileContainer>
            <input type="file" accept="image/*" onChange={handleChooseFile} />
            <p>{filePlaceholder}</p>
          </S.FileContainer>

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
              placeholder="Digite as palavras-chave desse vídeo"
            />
          </S.TagContainer>
          <small>
            Para adicionar as palavras-chave é necessário apertar a tecla{' '}
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

export default EditVideo
