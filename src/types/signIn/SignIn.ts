import { Teacher } from 'types/user'

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
  professor?: Teacher
}
