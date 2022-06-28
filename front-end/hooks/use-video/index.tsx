import { useSession } from 'next-auth/client'
import { createContext, useContext } from 'react'

import api from 'service/api'

import { ErrorMessage, SuccessMessage } from 'utils/messages'

export type VideoContextData = {
  addVideo: (
    topicId: string,
    title: string,
    urlVideo: string,
    keys: string,
    thumbnail: string
  ) => void
  deleteVideo: (id: string) => void
  studentDeleteVideo: (id: string) => void
  updateVideo: (
    id: string,
    topicId: string,
    title: string,
    urlVideo: string,
    keys: string,
    thumbnail: string
  ) => void
  studentUpdateVideo: (
    id: string,
    topicId: string,
    title: string,
    urlVideo: string,
    keys: string,
    thumbnail: string
  ) => void
}

export const VideoContextDefaultValues = {
  addVideo: () => null,
  deleteVideo: () => null,
  studentDeleteVideo: () => null,
  updateVideo: () => null,
  studentUpdateVideo: () => null
}

export const VideoContext = createContext<VideoContextData>(
  VideoContextDefaultValues
)

export type VideoProviderProps = {
  children: React.ReactNode
}

const VideoProvider = ({ children }: VideoProviderProps) => {
  const [session] = useSession()

  const addVideo = async (
    topicId: string,
    title: string,
    urlVideo: string,
    keys: string,
    thumbnail: string
  ) => {
    const data = {
      validationResult: {},
      topicId,
      title,
      urlVideo,
      keys,
      thumbnail,
      studentId: session?.id
    }

    await api
      .post(
        '/video',
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
          SuccessMessage('Video adicionado com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((AddVideoError: any) =>
          ErrorMessage(AddVideoError.errorMessage)
        )
      })
  }

  const deleteVideo = async (id: string) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.jwt}`
    }
    const data = { ValidationResult: {}, videoId: id }

    await api
      .delete('/admin/video', { headers, data })
      .then(function (response) {
        if (response) {
          SuccessMessage('Vídeo excluido com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((DeleteVideoError: any) =>
          ErrorMessage(DeleteVideoError.errorMessage)
        )
      })
  }

  const studentDeleteVideo = async (id: string) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.jwt}`
    }
    const data = { ValidationResult: {}, videoId: id, studentId: session?.id }

    await api
      .delete('/video', { headers, data })
      .then(function (response) {
        if (response) {
          SuccessMessage('Vídeo excluido com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((DeleteVideoError: any) =>
          ErrorMessage(DeleteVideoError.errorMessage)
        )
      })
  }

  const updateVideo = async (
    id: string,
    topicId: string,
    title: string,
    urlVideo: string,
    keys: string,
    thumbnail: string
  ) => {
    const data = {
      validationResult: {},
      id,
      topicId,
      title,
      urlVideo,
      keys,
      thumbnail
    }

    await api
      .put(
        '/admin/video',
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
          SuccessMessage('Vídeo alterado com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((UpdateVideoError: any) =>
          ErrorMessage(UpdateVideoError.errorMessage)
        )
      })
  }

  const studentUpdateVideo = async (
    id: string,
    topicId: string,
    title: string,
    urlVideo: string,
    keys: string,
    thumbnail: string
  ) => {
    const data = {
      validationResult: {},
      id,
      topicId,
      title,
      urlVideo,
      keys,
      thumbnail,
      studentId: session?.id
    }

    await api
      .put(
        '/video',
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
          SuccessMessage('Vídeo alterado com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((UpdateVideoError: any) =>
          ErrorMessage(UpdateVideoError.errorMessage)
        )
      })
  }

  return (
    <VideoContext.Provider
      value={{
        addVideo,
        deleteVideo,
        updateVideo,
        studentDeleteVideo,
        studentUpdateVideo
      }}
    >
      {children}
    </VideoContext.Provider>
  )
}

const useVideo = () => useContext(VideoContext)

export { VideoProvider, useVideo }
