type NameData = {
  firstName: string
  lastName: string
}

type IdentityUserData = {
  userName: string
}

export type StudentsProps = {
  id: string
  identityUser: IdentityUserData
  name: NameData
  isBlocked: boolean
}
