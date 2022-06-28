import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import React, { useEffect, useState } from 'react'

import Modal from 'components/Modal'
import Select from 'components/Select'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLink, FormLoading, FormWrapper } from 'components/Form'

import {
  FieldErrors,
  personalDataValidate,
  scholarityDataValidate,
  signUpValidate
} from 'utils/validations'

import {
  MdOutlineEmail,
  MdOutlineAccountCircle,
  MdLockOutline,
  MdOutlineBadge,
  MdOutlineSmartphone,
  MdOutlineCorporateFare,
  MdClose
} from 'react-icons/md'

import * as S from './styles'
import 'react-toastify/dist/ReactToastify.css'

import { ErrorMessage, SuccessMessage } from 'utils/messages'

import api from 'service/api'

export type FormPersonalDataProps = {
  name: string
  lastName: string
  cpf: string
  phoneNumber: string
}

export type FormScholarityDataProps = {
  scholarity: string
  institution: string
}

export type SignUpData = {
  email: string
  userName: string
  password: string
  confirm_password: string
}

const FormSignUp = () => {
  const [personalActive, setPersonalActive] = useState(true)
  const [scholarityActive, setScholarityActive] = useState(false)
  const [userActive, setUserActive] = useState(false)

  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [personalValues, setPersonalValues] = useState({
    name: '',
    lastName: '',
    cpf: '',
    phoneNumber: ''
  })
  const [scholarityValues, setScholarityValues] = useState({
    scholarity: '',
    institution: ''
  })
  const [userValues, setUserValues] = useState({
    userName: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const handlePersonalInput = (field: string, value: string) => {
    setPersonalValues((s) => ({ ...s, [field]: value.replace('_', '') }))
  }

  const handleScholarityInput = (field: string, value: string) => {
    setScholarityValues((s) => ({ ...s, [field]: value }))
  }

  const handleUserInput = (field: string, value: string) => {
    setUserValues((s) => ({ ...s, [field]: value }))
  }

  const handlePersonToScholarity = (event: React.FormEvent) => {
    event.preventDefault()

    const errors = personalDataValidate(personalValues)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setPersonalActive(false)
    setScholarityActive(true)

    setFieldError({})
  }

  const handleBackScholarityToPersonal = () => {
    setPersonalActive(true)
    setScholarityActive(false)
  }

  const handleScholarityToUser = (event: React.FormEvent) => {
    event.preventDefault()

    const errors = scholarityDataValidate(scholarityValues)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setScholarityActive(false)
    setUserActive(true)

    setFieldError({})
  }

  const handleBackUserToScholarity = () => {
    setScholarityActive(true)
    setUserActive(false)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signUpValidate(userValues)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    api
      .post(
        '/student',
        {
          name: personalValues.name,
          lastName: personalValues.lastName,
          cpf: personalValues.cpf
            .replace('.', '')
            .replace('.', '')
            .replace('-', ''),
          phoneNumber: personalValues.phoneNumber
            .replace(' ', '')
            .replace('(', '')
            .replace(')', '')
            .replace('-', ''),
          ...scholarityValues,
          email: userValues.email,
          userName: userValues.userName,
          password: userValues.password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(function (response) {
        if (response) {
          setIsOpen(false)
          SuccessMessage(
            'Cadastro realizado com sucesso. Enviamos uma mensagem para o e-mail informado para validar seu cadastro.'
          )
          setTimeout(() => {
            router.push('/')
          }, 6000)
        }
      })
      .catch((error) => {
        error.response.data.errors.map((registerError: any) =>
          ErrorMessage(registerError.errorMessage)
        )
      })

    setFieldError({})
    setLoading(false)
  }

  const escolaridade = [
    {
      id: 'Ensino Fundamental Incompleto',
      title: 'Ensino Fundamental Incompleto'
    },
    { id: 'Ensino Fundamental Completo', title: 'Ensino Fundamental Completo' },
    { id: 'Ensino Médio Incompleto', title: 'Ensino Médio Incompleto' },
    { id: 'Ensino Médio Completo', title: 'Ensino Médio Completo' },
    { id: 'Ensino Superior Incompleto', title: 'Ensino Superior Incompleto' },
    { id: 'Ensino Superior Completo', title: 'Ensino Superior Completo' },
    { id: 'Pós-Graduação Incompleto', title: 'Pós-Graduação Incompleto' },
    { id: 'Pós-Graduação Completo', title: 'Pós-Graduação Completo' }
  ]

  return (
    <FormWrapper>
      {personalActive && (
        <form onSubmit={handlePersonToScholarity}>
          <TextField
            name="name"
            mask={''}
            placeholder="Nome"
            value={personalValues.name}
            type="text"
            error={fieldError?.name}
            onInputChange={(v) => handlePersonalInput('name', v!)}
            icon={<MdOutlineAccountCircle />}
          />
          <TextField
            name="lastName"
            mask={''}
            placeholder="Sobrenome"
            value={personalValues.lastName}
            type="text"
            error={fieldError?.lastName}
            onInputChange={(v) => handlePersonalInput('lastName', v!)}
            icon={<MdOutlineAccountCircle />}
          />
          <TextField
            name="cpf"
            mask="999.999.999-99"
            value={personalValues.cpf}
            placeholder="CPF"
            type="text"
            error={fieldError?.cpf}
            onInputChange={(v) => handlePersonalInput('cpf', v!)}
            icon={<MdOutlineBadge />}
          />
          <TextField
            name="phoneNumber"
            mask="(99) 9 9999-9999"
            value={personalValues.phoneNumber}
            placeholder="Telefone"
            type="text"
            error={fieldError?.phoneNumber}
            onInputChange={(v) => handlePersonalInput('phoneNumber', v!)}
            icon={<MdOutlineSmartphone />}
          />

          <Button type="submit" size="large" fullWidth>
            Próximo
          </Button>
        </form>
      )}

      {scholarityActive && (
        <form onSubmit={handleScholarityToUser}>
          <Select
            items={escolaridade}
            name="scholarity"
            value={scholarityValues.scholarity}
            initialValue="Selecione uma escolaridade"
            error={fieldError?.scholarity}
            onSelectChange={(v) => handleScholarityInput('scholarity', v!)}
          />
          <TextField
            name="institution"
            mask={''}
            placeholder="Instituição"
            value={scholarityValues.institution}
            type="text"
            error={fieldError?.institution}
            onInputChange={(v) => handleScholarityInput('institution', v!)}
            icon={<MdOutlineCorporateFare />}
          />

          <S.Buttons>
            <Button
              type="button"
              size="large"
              bgColor="darkGray"
              fullWidth
              onClick={handleBackScholarityToPersonal}
            >
              Voltar
            </Button>

            <Button type="submit" size="large" fullWidth>
              Próximo
            </Button>
          </S.Buttons>
        </form>
      )}

      {userActive && (
        <form onSubmit={handleSubmit}>
          <TextField
            name="userName"
            mask={''}
            placeholder="Usuário"
            value={userValues.userName}
            type="text"
            error={fieldError?.userName}
            onInputChange={(v) => handleUserInput('userName', v!)}
            icon={<MdOutlineAccountCircle />}
          />
          <TextField
            name="email"
            mask={''}
            placeholder="E-mail"
            value={userValues.email}
            type="text"
            error={fieldError?.email}
            onInputChange={(v) => handleUserInput('email', v!)}
            icon={<MdOutlineEmail />}
          />
          <TextField
            name="password"
            mask={''}
            placeholder="Senha"
            value={userValues.password}
            type="password"
            error={fieldError?.password}
            onInputChange={(v) => handleUserInput('password', v!)}
            icon={<MdLockOutline />}
          />
          <TextField
            name="confirm_password"
            mask={''}
            placeholder="Confirmar Senha"
            value={userValues.confirm_password}
            type="password"
            error={fieldError?.confirm_password}
            onInputChange={(v) => handleUserInput('confirm_password', v!)}
            icon={<MdLockOutline />}
          />

          <S.Buttons>
            <Button
              type="button"
              size="large"
              bgColor="darkGray"
              fullWidth
              onClick={handleBackUserToScholarity}
            >
              Voltar
            </Button>

            <Button
              type="button"
              size="large"
              fullWidth
              onClick={() => setIsOpen(true)}
            >
              Ver Dados
            </Button>
          </S.Buttons>

          <Modal templateIsOpen={isOpen}>
            <S.Close
              role="button"
              aria-label="close modal"
              onClick={() => setIsOpen(false)}
            >
              <MdClose size={40} />
            </S.Close>

            <S.ModalContent>
              <S.ModalHeader>
                <S.ModalTitle>Confirmação de Dados</S.ModalTitle>
              </S.ModalHeader>

              <S.ModalBody>
                <h4>Dados Pessoais</h4>
                <div>
                  <p>
                    <strong>Nome</strong>:<br />
                    {personalValues.name} {personalValues.lastName}
                  </p>
                  <p>
                    <strong>CPF</strong>:<br />
                    {personalValues.cpf}
                  </p>
                  <p>
                    <strong>Telefone</strong>:<br />
                    {personalValues.phoneNumber}
                  </p>
                </div>
                <h4>Dados de Escolaridade</h4>
                <div>
                  <p>
                    <strong>Escolaridade</strong>:<br />
                    {scholarityValues.scholarity}
                  </p>
                  <p>
                    <strong>Intituição</strong>:<br />
                    {scholarityValues.institution}
                  </p>
                </div>
                <h4>Dados de Usuário</h4>
                <div>
                  <p>
                    <strong>Usuário</strong>:<br />
                    {userValues.userName}
                  </p>
                  <p>
                    <strong>E-mail</strong>:<br />
                    {userValues.email}
                  </p>
                </div>
              </S.ModalBody>

              <S.ModalFooter>
                <small>
                  Ao clicar em cadastrar você concorda com os nosso{' '}
                  <a href="/terms-and-policy">
                    Termos de Uso e Política de Privacidade
                  </a>
                </small>
                <div>
                  <Button
                    type="button"
                    minimal
                    onClick={() => setIsOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? <FormLoading /> : <span>Cadastrar</span>}
                  </Button>
                </div>
              </S.ModalFooter>
            </S.ModalContent>
          </Modal>
        </form>
      )}

      <FormLink>
        Já tenho uma conta.{' '}
        <Link href="/sign-in">
          <a>Entrar</a>
        </Link>
      </FormLink>

      <ToastContainer />
    </FormWrapper>
  )
}

export default FormSignUp
