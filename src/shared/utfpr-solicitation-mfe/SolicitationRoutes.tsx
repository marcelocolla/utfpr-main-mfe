import React from 'react'

import { SOLICITATION } from 'constants/routes'
const SolicitationRoutesLazy = React.lazy(() => import('utfpr-solicitation-mfe/SolicitationRoutes'))

type SolicitationRoutesProps = {
  path?: string
}

const SolicitationRoutes = ({ path = SOLICITATION }: SolicitationRoutesProps) => (
  <SolicitationRoutesLazy basename={path} />
)

export default SolicitationRoutes
