import { useSession } from 'next-auth/client'
import { createContext, useContext } from 'react'

import api from 'service/api'

import { ErrorMessage, SuccessMessage } from 'utils/messages'

export type StudentContextData = {
  deleteStudent: (id: string) => void
  blockStudent: (id: string) => void
  unlockStudent: (id: string) => void
}

export const StudentContextDefaultValues = {
  deleteStudent: () => null,
  blockStudent: () => null,
  unlockStudent: () => null
}

export const StudentContext = createContext<StudentContextData>(
  StudentContextDefaultValues
)

export type StudentProviderProps = {
  children: React.ReactNode
}

const StudentProvider = ({ children }: StudentProviderProps) => {
  const [session] = useSession()

  const deleteStudent = async (id: string) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.jwt}`
    }
    const data = { studentId: id, ValidationResult: {} }

    await api
      .delete('/admin/student', { headers, data })
      .then(function (response) {
        if (response) {
          SuccessMessage('Estudante excluido(a) com sucesso!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((DeleteStudentError: any) =>
          ErrorMessage(DeleteStudentError.errorMessage)
        )
      })
  }

  const blockStudent = async (id: string) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.jwt}`
    }
    const data = { studentId: id, ValidationResult: {} }

    await api
      .put(
        '/admin/blockStudent',
        {
          ...data
        },
        {
          headers
        }
      )
      .then(function (response) {
        if (response) {
          SuccessMessage('Estudante Bloqueado!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((BlockStudentError: any) =>
          ErrorMessage(BlockStudentError.errorMessage)
        )
      })
  }

  const unlockStudent = async (id: string) => {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.jwt}`
    }
    const data = { studentId: id, ValidationResult: {} }

    await api
      .put(
        '/admin/blockStudent',
        {
          ...data
        },
        {
          headers
        }
      )
      .then(function (response) {
        if (response) {
          SuccessMessage('Estudante Desbloqueado!')
        }
      })
      .catch((error) => {
        error.response.data.errors.map((UnlockStudentError: any) =>
          ErrorMessage(UnlockStudentError.errorMessage)
        )
      })
  }

  return (
    <StudentContext.Provider
      value={{ deleteStudent, blockStudent, unlockStudent }}
    >
      {children}
    </StudentContext.Provider>
  )
}

const useStudent = () => useContext(StudentContext)

export { StudentProvider, useStudent }
