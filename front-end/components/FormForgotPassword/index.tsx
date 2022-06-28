import { useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormLoading, FormWrapper } from 'components/Form'

import api from 'service/api'

import { MdOutlineAccountCircle } from 'react-icons/md'

import { ErrorMessage, SuccessMessage } from 'utils/messages'
import { FieldErrors, forgotValidate } from 'utils/validations'

import 'react-toastify/dist/ReactToastify.css'

const FormForgotPassword = () => {
  const { push, query } = useRouter()
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    userName: (query.userName as string) || ''
  })
  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = forgotValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    // enviar um post para /forgot-password pedindo um username
    await api
      .post(
        '/account/recoverPasswordPhase1',
        { userName: values.userName },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(function (response) {
        if (response.status === 200) {
          SuccessMessage(
            'Usuário enviado! Veja em seu e-mail. Enviamos uma mensagem com o link para redefinir sua senha.'
          )
          setTimeout(() => {
            push('/')
          }, 6000)
        }
      })
      .catch((error) => {
        error.response.data.errors.map((registerError: any) =>
          ErrorMessage(registerError.errorMessage)
        )
      })

    setLoading(false)
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="userName"
          mask={''}
          placeholder="Usuário"
          type="text"
          onInputChange={(v) => handleInput('userName', v!)}
          icon={<MdOutlineAccountCircle />}
          error={fieldError?.userName}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Enviar Usuário</span>}
        </Button>
      </form>

      <ToastContainer />
    </FormWrapper>
  )
}

export default FormForgotPassword
