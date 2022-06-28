import { useState } from 'react'

import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import TextField from 'components/TextField'
import { FormLoading, FormWrapper } from 'components/Form'

import { useTopic } from 'hooks/use-topic'

import { addTopicValidate, FieldErrors } from 'utils/validations'

import { MdInfoOutline, MdOutlineCategory } from 'react-icons/md'

import Select from 'components/Select'

export type AddTopicData = {
  title: string
  description: string
  fatherId?: string
}

export type TopicsSelectData = {
  id: string
  title: string
}

export type FormAddTopicProps = {
  topicsSelect: TopicsSelectData[]
}

const FormAddTopic = ({ topicsSelect }: FormAddTopicProps) => {
  const { addTopic } = useTopic()
  const [checked, setChecked] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    title: '',
    description: ''
  })
  const [loading, setLoading] = useState(false)
  const [fatherId, setFatherId] = useState('')

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = addTopicValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    await addTopic(values.title, values.description, fatherId)
    setValues({ title: '', description: '' })
    setFatherId('')

    setLoading(false)
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="title"
          mask={''}
          placeholder="Ex: Backend, Frontend"
          type="text"
          label="Nome da Categoria"
          onInputChange={(v) => handleInput('title', v!)}
          icon={<MdOutlineCategory />}
          disabled={loading}
          error={fieldError?.title}
        />

        <TextField
          name="description"
          mask={''}
          placeholder="Ex: Essa categoria trabalha de tal forma"
          type="text"
          label="Descrição da Categoria"
          onInputChange={(v) => handleInput('description', v!)}
          icon={<MdInfoOutline />}
          disabled={loading}
          error={fieldError?.description}
        />

        <Checkbox
          label="Essa categoria tem uma super categoria?"
          labelColor="black"
          labelFor="hasFather"
          onCheck={() => setChecked(!checked)}
        />

        {checked && (
          <Select
            items={topicsSelect}
            label="Super Categoria"
            name="fatherId"
            initialValue="Selecione uma super categoria"
            disabled={loading}
            onSelectChange={(v) => setFatherId(v!)}
          />
        )}

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Cadastrar Categoria</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormAddTopic
