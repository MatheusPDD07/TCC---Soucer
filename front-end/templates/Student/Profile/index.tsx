import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Cropper from 'react-cropper'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'

import Modal from 'components/Modal'
import Button from 'components/Button'
import Select from 'components/Select'
import TextField from 'components/TextField'
import { FormLoading } from 'components/Form'
import Breadcrumb from 'components/Breadcrumb'

import Base from '../Base'
import { SITE_NAME } from 'pages/_app'

import {
  MdClose,
  MdOutlineAccountCircle,
  MdOutlineCorporateFare,
  MdOutlineEmail,
  MdPhone
} from 'react-icons/md'

import * as S from './styles'
import 'cropperjs/dist/cropper.css'

import { FormatPhoneNumber } from 'utils/formatPhoneNumber'
import { FieldErrors, updateUser } from 'utils/validations'
import { ErrorMessage, SuccessMessage } from 'utils/messages'

import api from 'service/api'

export type StudentProps = {
  name: string
  lastName: string
  userName: string
  email: string
  phoneNumber: string
  scholarity: string
  institution: string
  imageUrl: string
  points: number
}

export type ProfileTemplateProps = {
  student: StudentProps
}

const defaultSrc = '/img/default-image.png'

const ProfileTemplate = ({ student }: ProfileTemplateProps) => {
  const router = useRouter()
  const [session] = useSession()

  const phone = FormatPhoneNumber(student.phoneNumber)

  const [isLoading, setIsLoading] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [modalUploadPhoto, setModalUploadPhoto] = useState(false)
  const [values, setValues] = useState({
    name: student.name,
    lastName: student.lastName,
    userName: student.userName,
    phoneNumber: phone,
    scholarity: student.scholarity,
    institution: student.institution
  })

  const [image, setImage] = useState(defaultSrc)
  const [cropper, setCropper] = useState<any>()

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

  const onChange = (e: any) => {
    e.preventDefault()
    let files
    if (e.dataTransfer) {
      files = e.dataTransfer.files
    } else if (e.target) {
      files = e.target.files
    }

    if (files[0].size > 2097152) {
      ErrorMessage('O Arquivo de ter no máximo 2MB')
      e.target.value = null
      setImage(defaultSrc)
    } else {
      const reader = new FileReader()
      reader.onload = () => {
        setImage(reader.result as any)
      }
      reader.readAsDataURL(files[0])
    }
  }

  const getCropData = async () => {
    if (typeof cropper !== 'undefined') {
      const newData = cropper.getCroppedCanvas().toDataURL().split(',')

      setIsLoading(true)
      await api
        .put(
          '/student/upload-image',
          {
            validationResult: {},
            imageStringBase64: newData[1],
            studentId: session?.id
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${session?.jwt}`
            }
          }
        )
        .then(function (response) {
          if (response) {
            SuccessMessage('Foto de perfil alterada com sucesso!')
          }
        })
        .catch((error) => {
          error.response.data.errors.map((UpdateUserPhotoError: any) =>
            ErrorMessage(UpdateUserPhotoError.errorMessage)
          )
        })

      setIsLoading(false)

      router.reload()

      setModalUploadPhoto(false)

      const fileInput = document.getElementById(
        'fileUpload'
      ) as HTMLInputElement | null
      fileInput!.value = ''
      setImage(defaultSrc)
    }
  }

  const CropCancel = () => {
    setModalUploadPhoto(false)

    const fileInput = document.getElementById(
      'fileUpload'
    ) as HTMLInputElement | null
    fileInput!.value = ''
    setImage(defaultSrc)
  }

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setModalUploadPhoto(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)

    const errors = updateUser(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setIsLoading(false)
      return
    }

    const data = {
      validationResult: {},
      id: session?.id,
      name: values.name,
      lastName: values.lastName,
      email: student.email,
      userName: values.userName,
      phoneNumber: values.phoneNumber
        .replace('(', '')
        .replace(')', '')
        .replace(' ', '')
        .replace(' ', '')
        .replace('-', ''),
      scholarity: values.scholarity,
      institution: values.institution
    }

    setFieldError({})

    await api
      .put(
        '/student',
        {
          ...data
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.jwt}`
          }
        }
      )
      .then(function (response) {
        if (response) {
          SuccessMessage('Alteração(ões) salva com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((UpdateUserError: any) =>
          ErrorMessage(UpdateUserError.errorMessage)
        )
      })

    router.reload()

    setIsLoading(false)
  }

  return (
    <Base user={student}>
      <NextSeo title={`Perfil - ${SITE_NAME}`} />

      <Breadcrumb title="Perfil" />

      <S.UploadPhotoArea onClick={() => setModalUploadPhoto(true)}>
        <S.PhotoArea>
          <Image
            src={student.imageUrl ? student.imageUrl : '/img/default-image.png'}
            alt={student.name}
            layout="fill"
            objectFit="cover"
          />
        </S.PhotoArea>
        <S.Text>
          <p>
            Deseja trocar sua imagem de perfil? <span>Clique aqui</span> e
            escolha sua imagem.
          </p>
        </S.Text>
      </S.UploadPhotoArea>

      <S.FormUpdateArea>
        <form onSubmit={handleSubmit}>
          <S.Fields>
            <S.FieldsBox>
              <TextField
                name="name"
                mask={''}
                label="Nome"
                value={values.name}
                placeholder="Ex: João"
                type="text"
                onInputChange={(v) => handleInput('name', v!)}
                icon={<MdOutlineAccountCircle />}
                error={fieldError?.name}
              />
              <TextField
                name="lastName"
                mask={''}
                label="Sobrenome"
                value={values.lastName}
                placeholder="Ex: Silva"
                type="text"
                onInputChange={(v) => handleInput('lastName', v!)}
                icon={<MdOutlineAccountCircle />}
                error={fieldError?.lastName}
              />
              <TextField
                name="userName"
                mask={''}
                label="Nome de Usuário"
                value={values.userName}
                placeholder="Ex: nomedeusuário"
                type="text"
                onInputChange={(v) => handleInput('userName', v!)}
                icon={<MdOutlineAccountCircle />}
                error={fieldError?.userName}
              />
            </S.FieldsBox>
            <S.FieldsBox>
              <TextField
                name="email"
                mask={''}
                label="E-mail"
                value={student.email}
                type="text"
                disabled={true}
                icon={<MdOutlineEmail />}
              />
              <TextField
                name="phoneNumber"
                mask="(99) 9 9999-9999"
                label="Telefone"
                value={values.phoneNumber}
                placeholder="Ex: (21) 9 0000-0000"
                type="text"
                error={fieldError?.phoneNumber}
                onInputChange={(v) => handleInput('phoneNumber', v!)}
                icon={<MdPhone />}
              />
            </S.FieldsBox>
            <S.FieldsBox>
              <Select
                items={escolaridade}
                name="scholarity"
                label="Escolaridade"
                value={values.scholarity}
                initialValue="Selecione uma opção"
                error={fieldError?.scholarity}
                onSelectChange={(v) => handleInput('scholarity', v!)}
              />
              <TextField
                name="institution"
                mask={''}
                label="Instituição"
                placeholder="Ex: Estácio de Sá"
                value={values.institution}
                type="text"
                error={fieldError?.institution}
                onInputChange={(v) => handleInput('institution', v!)}
                icon={<MdOutlineCorporateFare />}
              />
            </S.FieldsBox>
          </S.Fields>

          <S.ButtonArea>
            <Button
              type="button"
              as="a"
              href={`/forgot-password?username=${student.userName}`}
              minimal
              disabled={isLoading}
            >
              <span>Alterar Senha</span>
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? <FormLoading /> : <span>Salvar Alterações</span>}
            </Button>
          </S.ButtonArea>
        </form>
      </S.FormUpdateArea>

      <Modal templateIsOpen={modalUploadPhoto}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setModalUploadPhoto(false)}
        >
          <MdClose size={40} />
        </S.Close>
        <S.ModalContent>
          <S.ModalHeader>
            <S.ModalTitle>Cortar Imagem</S.ModalTitle>
          </S.ModalHeader>
          <S.ModalBody>
            <input
              type="file"
              accept="image/*"
              id="fileUpload"
              onChange={onChange}
            />
            <S.ImageCropper>
              <Cropper
                style={{ height: 300, width: '100%' }}
                zoomTo={0.5}
                aspectRatio={1 / 1}
                preview=".img-preview"
                src={image}
                viewMode={1}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                onInitialized={(instance) => {
                  setCropper(instance)
                }}
                guides={true}
              />
              <div className="box">
                <div className="img-preview" />
              </div>
            </S.ImageCropper>
          </S.ModalBody>
          <S.ModalFooter>
            <S.FooterButtons>
              <Button
                bgColor="darkGray"
                disabled={isLoading}
                onClick={() => CropCancel()}
              >
                Cancelar
              </Button>
              <Button
                bgColor="primary"
                disabled={isLoading}
                onClick={getCropData}
              >
                {isLoading ? <FormLoading /> : <span>Cortar Foto</span>}
              </Button>
            </S.FooterButtons>
          </S.ModalFooter>
        </S.ModalContent>
      </Modal>
    </Base>
  )
}

export default ProfileTemplate
