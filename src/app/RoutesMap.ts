import React from 'react'
import { RouteProps } from 'react-router-dom'

import { SIGN_IN, PROFILE } from 'constants/routes'

const LoginPageLazy = React.lazy(() => import('pages/Login'))
const ProfileRoutesLazy = React.lazy(() => import('shared/utfpr-profile-mfe/ProfileRoutes'))

export const getRoutesMap = (redirectAuth = SIGN_IN): RouteProps[] => {
  const authRoutes = ['/', SIGN_IN]

  if (redirectAuth !== SIGN_IN) {
    authRoutes.push(redirectAuth)
  }

  return [
    {
      exact: true,
      path: authRoutes,
      component: LoginPageLazy,
    },
    {
      path: PROFILE,
      component: ProfileRoutesLazy,
    },
  ]
}
