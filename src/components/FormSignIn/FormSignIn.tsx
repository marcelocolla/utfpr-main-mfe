import React from 'react'
import { Formik } from 'formik'

import { FormSignInFields } from 'components/FormSignInFields'

import { SignInSchema } from './FormSignIn.schema'

type SignInValues = {
  email: string
  password: string
}

export const FormSignIn = () => {
  const initialValues: SignInValues = {
    email: '',
    password: '',
  }

  async function handleSubmit(values: SignInValues) {
    // await signIn(values)
    console.log('>>> values', values)
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={SignInSchema}
      component={FormSignInFields}
    />
  )
}
