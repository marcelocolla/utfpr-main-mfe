import React from 'react'
import { Form } from 'formik'

import {
  FormBody,
  FormLine,
  FormFooter,
  Button,
  InputField,
  PasswordField,
} from '@utfprfabricadesoftware/utfpr-lib-ui-react'

type FormSignInFieldsProps = {
  isSubmitting: boolean
}

export const FormSignInFields = ({ isSubmitting }: FormSignInFieldsProps) => (
  <Form noValidate>
    <FormBody>
      <FormLine mb="2rem">
        <InputField name="email" label="Email" type="text" disabled={isSubmitting} required />
      </FormLine>

      <FormLine mb="2rem">
        <PasswordField name="password" label="Senha" disabled={isSubmitting} required />
      </FormLine>

      <strong>Esqueceu a senha?</strong>
    </FormBody>

    <FormFooter mt="4rem">
      <Button disabled={isSubmitting} loading={isSubmitting} name="loginButton">
        Entrar
      </Button>
    </FormFooter>
  </Form>
)
