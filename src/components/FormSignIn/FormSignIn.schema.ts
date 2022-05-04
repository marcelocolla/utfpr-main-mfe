import { object, string } from 'yup'

export const SignInSchema = object().shape({
  email: string().required('Required'),
  password: string().required('Required'),
})
