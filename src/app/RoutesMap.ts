import React from 'react'

import { RouteProps } from 'react-router-dom'

const LoginPageLazy = React.lazy(() => import('pages/Login'))
const ProfileRoutesLazy = React.lazy(() => import('shared/utfpr-profile-mfe/ProfileRoutes'))

export const getRoutesMap = (basename = ''): RouteProps[] => {
  return [
    {
      exact: true,
      path: [`${basename}/`, `${basename}/login`],
      component: LoginPageLazy,
    },
    {
      exact: true,
      path: `${basename}/profile`,
      component: ProfileRoutesLazy,
    },
  ]
}
