import { useSession } from 'next-auth/client'
import { createContext, useContext } from 'react'

import api from 'service/api'

import { ErrorMessage, SuccessMessage } from 'utils/messages'

export type FavoritesContextData = {
  addVideoToFavorites: (videoId: string) => void
  removeVideoFromFavorites: (videoId: string) => void
  addDocumentToFavorites: (documentId: string) => void
  removeDocumentFromFavorites: (documentId: string) => void
}

export const FavoritesContextDefaultValues = {
  addVideoToFavorites: () => null,
  removeVideoFromFavorites: () => null,
  addDocumentToFavorites: () => null,
  removeDocumentFromFavorites: () => null
}

export const FavoritesContext = createContext<FavoritesContextData>(
  FavoritesContextDefaultValues
)

export type FavoritesProviderProps = {
  children: React.ReactNode
}

const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [session] = useSession()

  const addVideoToFavorites = async (videoId: string) => {
    const data = {
      validationResult: {},
      studentId: session?.id,
      videoId
    }

    await api
      .post(
        '/Favorite/video',
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
          SuccessMessage('Video adicionado aos seus favoritos!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((AddVideoToFavoritesError: any) =>
          ErrorMessage(AddVideoToFavoritesError.errorMessage)
        )
      })
  }

  const removeVideoFromFavorites = async (videoId: string) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.jwt}`
    }
    const data = {
      validationResult: {},
      studentId: session?.id,
      videoId
    }

    await api
      .delete('/Favorite/video', { headers, data })
      .then(function (response) {
        if (response) {
          SuccessMessage('Video removido dos seus favoritos!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((RemoveVideoFromFavorites: any) =>
          ErrorMessage(RemoveVideoFromFavorites.errorMessage)
        )
      })
  }

  const addDocumentToFavorites = async (documentId: string) => {
    const data = {
      validationResult: {},
      studentId: session?.id,
      documentId
    }

    await api
      .post(
        '/Favorite/document',
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
          SuccessMessage('Documento adicionado aos seus favoritos!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((AddDocumentToFavoritesError: any) =>
          ErrorMessage(AddDocumentToFavoritesError.errorMessage)
        )
      })
  }

  const removeDocumentFromFavorites = async (documentId: string) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.jwt}`
    }
    const data = {
      validationResult: {},
      studentId: session?.id,
      documentId
    }

    await api
      .delete('/Favorite/document', { headers, data })
      .then(function (response) {
        if (response) {
          SuccessMessage('Documento removido dos seus favoritos!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((RemoveDocumentFromFavorites: any) =>
          ErrorMessage(RemoveDocumentFromFavorites.errorMessage)
        )
      })
  }

  return (
    <FavoritesContext.Provider
      value={{
        addVideoToFavorites,
        removeVideoFromFavorites,
        addDocumentToFavorites,
        removeDocumentFromFavorites
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

const useFavorites = () => useContext(FavoritesContext)

export { FavoritesProvider, useFavorites }
