import { useState } from 'react'
import { useRouter } from 'next/router'

import Select from 'components/Select'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLoading, FormWrapper } from 'components/Form'

import { useVideo } from 'hooks/use-video'

import { MdClose, MdOutlineAddLink, MdTitle } from 'react-icons/md'

import { convertFileToBase64 } from 'utils/convertFile'
import { addVideoValidate, FieldErrors } from 'utils/validations'

import * as S from './styles'

type TopicData = {
  id: string
  title: string
}

export type AddVideoProps = {
  topics: TopicData[]
}

const AddVideo = ({ topics }: AddVideoProps) => {
  const router = useRouter()
  const { addVideo } = useVideo()

  const [isLoading, setIsLoading] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [selectedFile, setSelectedFile] = useState('')
  const [filePlaceholder, setFilePlaceholder] = useState(
    'Clique aqui e escolha um arquivo'
  )

  const [tags, setTags] = useState<any[]>([])
  const [topicId, setTopicId] = useState('')

  const [addValues, setAddValues] = useState({
    title: '',
    urlVideo: ''
  })

  const handleChooseFile = async (event: any) => {
    const file = event.target.files[0]
    setFilePlaceholder(file.name)
    const base64: string = await convertFileToBase64(file)
    const newBase64 = base64.split(',')

    await setSelectedFile(newBase64[1])
  }

  function handleKeyDown(e: any) {
    if (e.key !== 'Enter') return
    if (e.key === 'Enter') e.preventDefault()
    const value = e.currentTarget.value
    if (!value.trim()) return
    setTags([...tags, value])
    e.target.value = ''
  }

  function removeTag(index: number) {
    setTags(tags.filter((el, i) => i !== index))
  }

  const handleAddInput = (field: string, value: string) => {
    setAddValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const errors = addVideoValidate(addValues)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setIsLoading(false)
      return
    }

    setFieldError({})

    await addVideo(
      topicId,
      addValues.title,
      addValues.urlVideo,
      tags.join('; '),
      selectedFile
    )
    setAddValues({ title: '', urlVideo: '' })
    setTopicId('')
    setTags([])
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
            placeholder="Ex: Curso de Node.JS - O que é Node.JS #01"
            type="text"
            label="Título"
            onInputChange={(v) => handleAddInput('title', v!)}
            icon={<MdTitle />}
            disabled={isLoading}
            error={fieldError?.title}
          />

          <TextField
            name="urlVideo"
            mask={''}
            value={addValues.urlVideo}
            placeholder="Ex: https://www.youtube.com/watch?v=s"
            type="text"
            label="Link do Vídeo"
            onInputChange={(v) => handleAddInput('urlVideo', v!)}
            icon={<MdOutlineAddLink />}
            disabled={isLoading}
            error={fieldError?.urlVideo}
          />

          <Select
            items={topics}
            label="Categoria"
            name="topicId"
            value={topicId}
            initialValue="Selecione uma opção"
            disabled={isLoading}
            onSelectChange={(v) => setTopicId(v!)}
          />

          <S.File>
            <label>Capa (Thumbnail)</label>
            <S.FileContainer>
              <input type="file" accept="image/*" onChange={handleChooseFile} />
              <p>{filePlaceholder}</p>
            </S.FileContainer>
          </S.File>

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
              placeholder="Digite as palavras-chave desse vídeo"
            />
          </S.TagContainer>
          <small>
            Para adicionar as palavras-chave é necessário apertar a tecla{' '}
            <kbd>Enter</kbd>.
          </small>

          <Button type="submit" fullWidth disabled={isLoading}>
            {isLoading ? <FormLoading /> : <span>Adicionar Vídeo</span>}
          </Button>
        </form>
      </FormWrapper>
    </S.Wrapper>
  )
}

export default AddVideo
