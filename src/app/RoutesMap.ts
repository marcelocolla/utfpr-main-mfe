import React from 'react'
import { RouteProps } from 'react-router-dom'

import { SIGN_IN, PROFILE } from 'constants/routes'

const LoginPageLazy = React.lazy(() => import('pages/Login'))
const ProfileRoutesLazy = React.lazy(() => import('shared/utfpr-profile-mfe/ProfileRoutes'))

export const getRoutesMap = (): RouteProps[] => {
  return [
    {
      exact: true,
      path: ['/', SIGN_IN],
      component: LoginPageLazy,
    },
    {
      path: PROFILE,
      component: ProfileRoutesLazy,
    },
  ]
}
