import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import * as S from './styles'

import { AiOutlinePlus } from 'react-icons/ai'
import { MdClose, MdInfoOutline, MdOutlineCategory } from 'react-icons/md'

import Modal from 'components/Modal'
import Button from 'components/Button'
import Select from 'components/Select'
import Checkbox from 'components/Checkbox'
import TextField from 'components/TextField'
import { FormLoading, FormWrapper } from 'components/Form'
import { TopicCrudCardProps } from 'components/TopicCrudCard'
import TopicCrudCardPagination from 'components/TopicCrudCardPagination'

import { SITE_NAME } from 'pages/_app'
import Base, { UserData } from '../Base'
import { useTopic } from 'hooks/use-topic'
import { addTopicValidate, FieldErrors } from 'utils/validations'

export type TopicsTempalteProps = {
  user: UserData
  topics: TopicCrudCardProps[]
}

const TopicsTemplate = ({ user, topics }: TopicsTempalteProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { addTopic } = useTopic()

  const [checked, setChecked] = useState(false)

  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [fatherId, setFatherId] = useState('')

  const [addModalIsOpen, setAddModalIsOpen] = useState(false)
  const [addValues, setAddValues] = useState({
    title: '',
    description: ''
  })

  const handleAddInput = (field: string, value: string) => {
    setAddValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const errors = addTopicValidate(addValues)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setIsLoading(false)
      return
    }

    setFieldError({})

    await addTopic(addValues.title, addValues.description, fatherId)
    setAddValues({ title: '', description: '' })
    setFatherId('')
    await setChecked(false)
    setAddModalIsOpen(false)
    router.reload()

    setIsLoading(false)
  }

  return (
    <Base user={user}>
      <NextSeo title={`Categorias - ${SITE_NAME}`} />

      <S.Top>
        <S.Title>Categorias</S.Title>
        <Button
          icon={<AiOutlinePlus size={20} />}
          size="small"
          onClick={() => setAddModalIsOpen(true)}
        >
          Adicionar Categoria
        </Button>
      </S.Top>

      <TopicCrudCardPagination items={topics} topics={topics} />

      <Modal templateIsOpen={addModalIsOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setAddModalIsOpen(false)}
        >
          <MdClose size={40} />
        </S.Close>
        <S.ModalContent>
          <S.ModalHeader>
            <S.ModalTitle>Adicionar Categoria</S.ModalTitle>
          </S.ModalHeader>
          <S.ModalBody>
            <FormWrapper>
              <form onSubmit={handleSubmit}>
                <TextField
                  name="title"
                  mask={''}
                  value={addValues.title}
                  placeholder="Ex: Backend, Frontend"
                  type="text"
                  label="Nome da Categoria"
                  onInputChange={(v) => handleAddInput('title', v!)}
                  icon={<MdOutlineCategory />}
                  disabled={isLoading}
                  error={fieldError?.title}
                />

                <TextField
                  name="description"
                  mask={''}
                  value={addValues.description}
                  placeholder="Ex: Essa categoria trabalha de tal forma"
                  type="text"
                  label="Descrição da Categoria"
                  onInputChange={(v) => handleAddInput('description', v!)}
                  icon={<MdInfoOutline />}
                  disabled={isLoading}
                  error={fieldError?.description}
                />

                <Checkbox
                  label="Essa categoria tem uma super categoria?"
                  labelColor="black"
                  labelFor="hasFather"
                  isChecked={checked}
                  onCheck={() => setChecked(!checked)}
                />

                {checked && (
                  <Select
                    items={topics}
                    label="Super Categoria"
                    name="fatherId"
                    value={fatherId}
                    initialValue="Selecione uma super categoria"
                    disabled={isLoading}
                    onSelectChange={(v) => setFatherId(v!)}
                  />
                )}

                <Button
                  type="submit"
                  size="large"
                  fullWidth
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <FormLoading />
                  ) : (
                    <span>Cadastrar Categoria</span>
                  )}
                </Button>
              </form>
            </FormWrapper>
          </S.ModalBody>
        </S.ModalContent>
      </Modal>
    </Base>
  )
}

export default TopicsTemplate
