import { useSession } from 'next-auth/client'
import { createContext, useContext } from 'react'

import api from 'service/api'

import { ErrorMessage, SuccessMessage } from 'utils/messages'

export type DocContextData = {
  addDoc: (
    topicId: string,
    title: string,
    documentBase64: string,
    keys: string
  ) => void
  deleteDoc: (id: string) => void
  studentDeleteDoc: (id: string) => void
  updateDoc: (
    id: string,
    topicId: string,
    title: string,
    urlDocument: string,
    keys: string
  ) => void
  studentUpdateDoc: (
    id: string,
    topicId: string,
    title: string,
    urlDocument: string,
    keys: string
  ) => void
}

export const DocContextDefaultValues = {
  addDoc: () => null,
  deleteDoc: () => null,
  studentDeleteDoc: () => null,
  updateDoc: () => null,
  studentUpdateDoc: () => null
}

export const DocContext = createContext<DocContextData>(DocContextDefaultValues)

export type DocProviderProps = {
  children: React.ReactNode
}

const DocProvider = ({ children }: DocProviderProps) => {
  const [session] = useSession()

  const addDoc = async (
    topicId: string,
    title: string,
    documentBase64: string,
    keys: string
  ) => {
    const data = {
      keys,
      title,
      topicId,
      documentBase64,
      ValidationResult: {},
      studentId: session?.id
    }

    await api
      .post(
        '/document',
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
          SuccessMessage('Documento adicionado com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((AddDocError: any) =>
          ErrorMessage(AddDocError.errorMessage)
        )
      })
  }

  const deleteDoc = async (id: string) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.jwt}`
    }
    const data = { ValidationResult: {}, documentId: id }

    await api
      .delete('/admin/document', { headers, data })
      .then(function (response) {
        if (response) {
          SuccessMessage('Documento excluido com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((DeleteDocError: any) =>
          ErrorMessage(DeleteDocError.errorMessage)
        )
      })
  }

  const studentDeleteDoc = async (id: string) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.jwt}`
    }
    const data = {
      ValidationResult: {},
      documentId: id,
      studentId: session?.id
    }

    await api
      .delete('/document', { headers, data })
      .then(function (response) {
        if (response) {
          SuccessMessage('Documento excluido com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((StudentDeleteDocError: any) =>
          ErrorMessage(StudentDeleteDocError.errorMessage)
        )
      })
  }

  const updateDoc = async (
    id: string,
    topicId: string,
    title: string,
    urlDocument: string,
    keys: string
  ) => {
    const data = {
      id,
      keys,
      title,
      topicId,
      urlDocument,
      studentId: session?.id,
      ValidationResult: {}
    }

    await api
      .put(
        '/admin/document',
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
          SuccessMessage('Documento alterado com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((UpdateDocError: any) =>
          ErrorMessage(UpdateDocError.errorMessage)
        )
      })
  }

  const studentUpdateDoc = async (
    id: string,
    topicId: string,
    title: string,
    urlDocument: string,
    keys: string
  ) => {
    const data = {
      id,
      keys,
      title,
      topicId,
      urlDocument,
      studentId: session?.id,
      ValidationResult: {}
    }

    await api
      .put(
        '/document',
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
          SuccessMessage('Documento alterado com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((StudentUpdateDocError: any) =>
          ErrorMessage(StudentUpdateDocError.errorMessage)
        )
      })
  }

  return (
    <DocContext.Provider
      value={{
        addDoc,
        deleteDoc,
        updateDoc,
        studentDeleteDoc,
        studentUpdateDoc
      }}
    >
      {children}
    </DocContext.Provider>
  )
}

const useDoc = () => useContext(DocContext)

export { DocProvider, useDoc }
