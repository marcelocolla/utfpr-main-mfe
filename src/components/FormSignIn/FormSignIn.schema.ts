import { object, string } from 'yup'

export const SignInSchema = object().shape({
  email: string().required('Insira seu e-mail de acesso!'),
  password: string().required('Insira sua senha de acesso!'),
})
