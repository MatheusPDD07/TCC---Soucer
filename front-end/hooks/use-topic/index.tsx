import { useSession } from 'next-auth/client'
import { createContext, useContext } from 'react'

import api from 'service/api'

import { ErrorMessage, SuccessMessage } from 'utils/messages'

export type TopicContextData = {
  addTopic: (title: string, description: string, fatherTopicId: string) => void
  deleteTopic: (id: string) => void
  updateTopic: (
    id: string,
    title: string,
    description: string,
    fatherTopicId: string
  ) => void
}

export const TopicContextDefaultValues = {
  addTopic: () => null,
  deleteTopic: () => null,
  updateTopic: () => null
}

export const TopicContext = createContext<TopicContextData>(
  TopicContextDefaultValues
)

export type TopicProviderProps = {
  children: React.ReactNode
}

const TopicProvider = ({ children }: TopicProviderProps) => {
  const [session] = useSession()

  const addTopic = async (
    title: string,
    description: string,
    fatherTopicId: string | null
  ) => {
    const data = {
      title,
      description,
      fatherTopicId,
      ValidationResult: {}
    }

    await api
      .post(
        '/admin/createTopic',
        {
          ...data,
          fatherTopicId: data.fatherTopicId ? data.fatherTopicId : null
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
          SuccessMessage('Categoria adicionada com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((AddTopicError: any) =>
          ErrorMessage(AddTopicError.errorMessage)
        )
      })
  }

  const deleteTopic = async (id: string) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.jwt}`
    }
    const data = { topicId: id, ValidationResult: {} }

    await api
      .delete('/admin/topic', { headers, data })
      .then(function (response) {
        if (response) {
          SuccessMessage('Categoria excluida com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((DeleteTopicError: any) =>
          ErrorMessage(DeleteTopicError.errorMessage)
        )
      })
  }

  const updateTopic = async (
    id: string,
    title: string,
    description: string,
    fatherTopicId: string | null
  ) => {
    const data = {
      id,
      title,
      description,
      fatherTopicId,
      ValidationResult: {}
    }

    await api
      .put(
        '/admin/topic',
        {
          ...data,
          fatherTopicId: data.fatherTopicId ? data.fatherTopicId : null
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
          SuccessMessage('Categoria alterada com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((UpdateTopicError: any) =>
          ErrorMessage(UpdateTopicError.errorMessage)
        )
      })
  }

  return (
    <TopicContext.Provider value={{ deleteTopic, addTopic, updateTopic }}>
      {children}
    </TopicContext.Provider>
  )
}

const useTopic = () => useContext(TopicContext)

export { TopicProvider, useTopic }
