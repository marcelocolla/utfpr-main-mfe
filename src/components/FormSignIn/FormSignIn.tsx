import React from 'react'
import { Formik } from 'formik'

import { SignInForm } from 'types/signIn'
import { FormSignInFields } from 'components/FormSignInFields'
import { signIn } from 'services/signIn/signInService'

import { SignInSchema } from './FormSignIn.schema'

export const FormSignIn = () => {
  const initialValues: SignInForm = {
    email: '',
    password: '',
  }

  async function handleSubmit(values: SignInForm) {
    try {
      const result = await signIn(values)

      console.log('>>> sign in result', result.data)
    } catch (err) {
      console.log('>>> sign in error', err)
    }
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
