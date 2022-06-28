import { AddTopicData } from 'components/FormAddTopic'
import {
  FormPersonalDataProps,
  FormScholarityDataProps,
  SignUpData
} from 'components/FormSignUp'
import Joi from 'joi'

const fieldsValidations = {
  name: Joi.string()
    .required()
    .min(3)
    .pattern(/^[^0-9]+$/)
    .messages({
      'string.base': 'Nome deve conter apenas texto',
      'string.min': `Nome deve conter no mínimo {#limit} caracteres.`,
      'string.empty': 'Nome é um campo obrigatório.',
      'string.pattern.base': `Nome não pode conter números.`
    }),
  lastName: Joi.string()
    .required()
    .min(2)
    .pattern(/^[^0-9]+$/)
    .messages({
      'string.base': 'Sobrenome deve conter apenas texto',
      'string.min': `Sobrenome deve conter no mínimo {#limit} caracteres.`,
      'string.empty': 'Sobrenome é um campo obrigatório.',
      'string.pattern.base': `Sobrenome não pode conter números.`
    }),
  cpf: Joi.string().required().min(14).messages({
    'string.min': `CPF deve conter {#limit} caracteres.`,
    'string.empty': 'CPF é um campo obrigatório.'
  }),
  phoneNumber: Joi.string().required().min(16).messages({
    'string.min': `Telefone deve conter {#limit} caracteres.`,
    'string.empty': 'Telefone é um campo obrigatório.'
  }),
  scholarity: Joi.string().required().min(3).messages({
    'string.base': 'Escolaridade deve conter apenas texto',
    'string.min': `Escolaridade deve conter no mínimo {#limit} caracteres.`,
    'string.empty': 'Escolaridade é um campo obrigatório.'
  }),
  institution: Joi.string().required().min(3).messages({
    'string.base': 'Instituição deve conter apenas texto',
    'string.min': `Instituição deve conter no mínimo {#limit} caracteres.`,
    'string.empty': 'Instituição é um campo obrigatório.'
  }),
  userName: Joi.string().min(3).required().messages({
    'string.base': 'Usuário deve conter apenas texto',
    'string.min': `Usuário deve conter no mínimo {#limit} caracteres.`,
    'string.empty': 'Usuário é um campo obrigatório.'
  }),
  email: Joi.string()
    .email({
      tlds: { allow: false }
    })
    .required()
    .messages({
      'string.email': 'E-mail deve conter um e-mail válido',
      'string.empty': 'E-mail é um campo obrigatório.'
    }),
  password: Joi.string().min(8).required().messages({
    'string.min': `Senha deve conter no mínimo {#limit} caracteres.`,
    'string.empty': 'Senha é um campo obrigatório.'
  }),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'A confirmação de senha não bate com a senha informada'
    }),
  title: Joi.string().required().min(3).messages({
    'string.base': 'Título deve conter apenas texto',
    'string.min': `Título deve conter no mínimo {#limit} caracteres.`,
    'string.empty': 'Título é um campo obrigatório.'
  }),
  description: Joi.string().required().min(3).messages({
    'string.base': 'Descrição da Categoria deve conter apenas texto',
    'string.min': `Descrição da Categoria deve conter no mínimo {#limit} caracteres.`,
    'string.empty': 'Descrição da Categoria é um campo obrigatório.'
  }),
  topicId: Joi.string().required().messages({
    'string.empty': 'A Categoria é um campo obrigatório.'
  }),
  urlVideo: Joi.string().uri().required().messages({
    'string.uri': `A informação passada não é um link`,
    'string.empty': 'O link do Vídeo é um campo obrigatório.'
  })
}

export type FieldErrors = {
  [key: string]: string
}

function getFieldErrors(objErrors: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objErrors.error) {
    objErrors.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function signUpValidate(values: SignUpData) {
  const { userName, email, password, confirm_password } = fieldsValidations

  const schema = Joi.object({ userName, email, password, confirm_password })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type SignInValues = Omit<SignUpData, 'email' | 'confirm_password'>
export function signInValidate(values: SignInValues) {
  const { userName, password } = fieldsValidations

  const schema = Joi.object({ userName, password })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ForgotValues = Pick<SignUpData, 'userName'>
export function forgotValidate(values: ForgotValues) {
  const { userName } = fieldsValidations

  const schema = Joi.object({ userName })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type ResetValues = {
  password: string
  confirm_password: string
}
export function resetValidate(values: ResetValues) {
  const { userName, password, confirm_password } = fieldsValidations
  const schema = Joi.object({ userName, password, confirm_password })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function personalDataValidate(values: FormPersonalDataProps) {
  const { name, lastName, cpf, phoneNumber } = fieldsValidations

  const schema = Joi.object({ name, lastName, cpf, phoneNumber })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function scholarityDataValidate(values: FormScholarityDataProps) {
  const { scholarity, institution } = fieldsValidations

  const schema = Joi.object({ scholarity, institution })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export function addTopicValidate(values: AddTopicData) {
  const { title, description } = fieldsValidations

  const schema = Joi.object({ title, description })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type updateTopicData = {
  title: string
  description: string
}

export function updateTopicValidate(values: updateTopicData) {
  const { title, description } = fieldsValidations

  const schema = Joi.object({ title, description })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type documentData = {
  title: string
  topicId: string
}

export function addDocumentValidate(values: documentData) {
  const { title, topicId } = fieldsValidations

  const schema = Joi.object({ title, topicId })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type updateDocumentData = {
  title: string
  topicId: string
}

export function updateDocValidate(values: updateDocumentData) {
  const { title, topicId } = fieldsValidations

  const schema = Joi.object({ title, topicId })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type VideoData = {
  title: string
  urlVideo: string
}

export function addVideoValidate(values: VideoData) {
  const { title, urlVideo } = fieldsValidations

  const schema = Joi.object({
    title,
    urlVideo
  })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type UpdateVideoData = {
  title: string
  urlVideo: string
  topicId: string
}

export function updateVideoValidate(values: UpdateVideoData) {
  const { title, urlVideo, topicId } = fieldsValidations

  const schema = Joi.object({
    title,
    urlVideo,
    topicId
  })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

type UpdateUser = {
  name: string
  lastName: string
  userName: string
  phoneNumber: string
  scholarity: string
  institution: string
}

export function updateUser(values: UpdateUser) {
  const { name, lastName, userName, phoneNumber, scholarity, institution } =
    fieldsValidations

  const schema = Joi.object({
    name,
    lastName,
    userName,
    phoneNumber,
    scholarity,
    institution
  })
  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
