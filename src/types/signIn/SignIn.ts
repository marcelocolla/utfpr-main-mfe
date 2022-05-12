import { Person, UserGeneric } from 'types/user/Person'

export type SignInForm = {
  email: string
  password: string
}

export type SignInPayload = {
  email: string
  senha: string
}

export type SignInResponse = {
  token: string
  pessoa?: Person
  professor?: UserGeneric
  deseg?: UserGeneric
  vigilante?: UserGeneric
}
