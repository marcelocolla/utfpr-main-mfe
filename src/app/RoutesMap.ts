import { lazy } from 'react'
import { RouteProps } from 'react-router-dom'

import { SIGN_IN, PROFILE, SOLICITATION, ADMIT, VISITOR } from 'constants/routes'

const LoginPageLazy = lazy(() => import('pages/Login'))
const ProfileRoutesLazy = lazy(() => import('shared/utfpr-profile-mfe/ProfileRoutes'))
const SolicitationRoutesLazy = lazy(
  () => import('shared/utfpr-solicitation-mfe/SolicitationRoutes'),
)
const AdmitRoutesLazy = lazy(() => import('shared/utfpr-admit-mfe/AdmitRoutes'))
const VisitorRoutesLazy = lazy(() => import('shared/utfpr-visitor-mfe/VisitorRoutes'))

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
    {
      path: SOLICITATION,
      component: SolicitationRoutesLazy,
    },
    {
      path: ADMIT,
      component: AdmitRoutesLazy,
    },
    {
      path: VISITOR,
      component: VisitorRoutesLazy,
    },
  ]
}
