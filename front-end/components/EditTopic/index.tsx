import { useState } from 'react'
import { useRouter } from 'next/router'

import Select from 'components/Select'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import TextField from 'components/TextField'
import { FormLoading, FormWrapper } from 'components/Form'
import { TopicCrudCardProps } from 'components/TopicCrudCard'

import { useTopic } from 'hooks/use-topic'

import { MdInfoOutline, MdOutlineCategory } from 'react-icons/md'

import { FieldErrors, updateTopicValidate } from 'utils/validations'

import * as S from './styles'

export type EditTopicProps = Pick<
  TopicCrudCardProps,
  'id' | 'title' | 'description' | 'topics' | 'fatherId'
>

const EditTopic = ({
  id,
  title,
  description,
  fatherId,
  topics
}: EditTopicProps) => {
  const router = useRouter()
  const { updateTopic } = useTopic()

  const [isLoading, setIsLoading] = useState(false)
  const [updateChecked, setUpdateChecked] = useState(
    fatherId == null ? false : true
  )
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [values, setValues] = useState({
    title: title,
    description: description
  })
  const [fatherUpdateId, setFatherUpdateId] = useState(fatherId)

  const handleUpdateInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const errors = updateTopicValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setIsLoading(false)
      return
    }

    setFieldError({})

    await updateTopic(id, values.title, values.description, fatherUpdateId)
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
            placeholder="Ex: Backend, Frontend"
            type="text"
            label="Nome da Categoria"
            onInputChange={(v) => handleUpdateInput('title', v!)}
            icon={<MdOutlineCategory />}
            disabled={isLoading}
            error={fieldError?.title}
          />

          <TextField
            name="description"
            mask={''}
            value={values.description}
            placeholder="Ex: Essa categoria trabalha de tal forma"
            type="text"
            label="Descrição da Categoria"
            onInputChange={(v) => handleUpdateInput('description', v!)}
            icon={<MdInfoOutline />}
            disabled={isLoading}
            error={fieldError?.description}
          />

          <Checkbox
            label="Essa categoria tem uma super categoria?"
            labelColor="black"
            labelFor="hasFatherUpdate"
            checked={updateChecked}
            onCheck={() => setUpdateChecked(!updateChecked)}
          />

          {updateChecked && (
            <Select
              items={topics}
              label="Super Categoria"
              name="fatherIdUpdate"
              value={fatherUpdateId}
              initialValue="Selecione uma super categoria"
              disabled={isLoading}
              onSelectChange={(v) => setFatherUpdateId(v!)}
            />
          )}

          <Button type="submit" size="large" fullWidth disabled={isLoading}>
            {isLoading ? <FormLoading /> : <span>Salvar Alterações</span>}
          </Button>
        </form>
      </FormWrapper>
    </S.Wrapper>
  )
}

export default EditTopic
