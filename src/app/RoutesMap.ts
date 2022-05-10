import React from 'react'
import { RouteProps } from 'react-router-dom'

import { SIGN_IN, PROFILE } from 'constants/routes'

const LoginPageLazy = React.lazy(() => import('pages/Login'))
const ProfileRoutesLazy = React.lazy(() => import('shared/utfpr-profile-mfe/ProfileRoutes'))

export const getRoutesMap = (basename = ''): RouteProps[] => {
  return [
    {
      exact: true,
      path: [`${basename}/`, `${basename}/${SIGN_IN}`],
      component: LoginPageLazy,
    },
    {
      exact: true,
      path: `${basename}/${PROFILE}`,
      component: ProfileRoutesLazy,
    },
  ]
}
