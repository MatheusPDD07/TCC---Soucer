import { useSession } from 'next-auth/client'
import { createContext, useContext } from 'react'

import api from 'service/api'

import { ErrorMessage, SuccessMessage } from 'utils/messages'

export type StarContextData = {
  addStarToVideo: (videoId: string) => void
  removeStarFromVideo: (videoId: string) => void
  addStarToDocument: (documentId: string) => void
  removeStarFromDocument: (documentId: string) => void
}

export const StarContextDefaultValues = {
  addStarToVideo: () => null,
  removeStarFromVideo: () => null,
  addStarToDocument: () => null,
  removeStarFromDocument: () => null
}

export const StarContext = createContext<StarContextData>(
  StarContextDefaultValues
)

export type StarProviderProps = {
  children: React.ReactNode
}

const StarProvider = ({ children }: StarProviderProps) => {
  const [session] = useSession()

  const addStarToVideo = async (videoId: string) => {
    const data = {
      validationResult: {},
      studentId: session?.id,
      videoId
    }

    await api
      .post(
        '/video/Star',
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
          SuccessMessage('Obrigado por sua estrela!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((AddStarToVideoError: any) =>
          ErrorMessage(AddStarToVideoError.errorMessage)
        )
      })
  }

  const removeStarFromVideo = async (videoId: string) => {
    const data = {
      validationResult: {},
      studentId: session?.id,
      videoId
    }

    await api
      .post(
        '/video/CancelStar',
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
          SuccessMessage('Obrigado por sua estrela!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((AddStarToVideoError: any) =>
          ErrorMessage(AddStarToVideoError.errorMessage)
        )
      })
  }

  const addStarToDocument = async (documentId: string) => {
    const data = {
      validationResult: {},
      studentId: session?.id,
      documentId
    }

    await api
      .post(
        '/document/Star',
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
          SuccessMessage('Obrigado por sua estrela!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((AddStarToDocumentError: any) =>
          ErrorMessage(AddStarToDocumentError.errorMessage)
        )
      })
  }

  const removeStarFromDocument = async (documentId: string) => {
    const data = {
      validationResult: {},
      studentId: session?.id,
      documentId
    }

    await api
      .post(
        '/document/CancelStar',
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
          SuccessMessage('Estrela cancelada!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((RemoveStarFromDocumentError: any) =>
          ErrorMessage(RemoveStarFromDocumentError.errorMessage)
        )
      })
  }

  return (
    <StarContext.Provider
      value={{
        addStarToVideo,
        removeStarFromVideo,
        addStarToDocument,
        removeStarFromDocument
      }}
    >
      {children}
    </StarContext.Provider>
  )
}

const useStar = () => useContext(StarContext)

export { StarProvider, useStar }
