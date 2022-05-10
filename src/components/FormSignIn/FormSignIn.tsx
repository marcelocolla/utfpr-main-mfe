import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import { useHistory } from 'react-router-dom'

import { PROFILE } from 'constants/routes'
import { SignInForm } from 'types/signIn'
import { FormSignInFields } from 'components/FormSignInFields'
import { signIn } from 'services/signIn/signInService'

import { SignInSchema } from './FormSignIn.schema'

export const FormSignIn = () => {
  const history = useHistory()

  const initialValues: SignInForm = {
    email: '',
    password: '',
  }

  async function handleSubmit(values: SignInForm, actions: FormikHelpers<SignInForm>) {
    try {
      const result = await signIn(values)

      history.replace(PROFILE)

      console.log('>>> sign in result', result.data)
    } catch (err) {
      console.log('>>> sign in error', err)

      actions.setSubmitting(false)
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
