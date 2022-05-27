import React from 'react'

import { ADMIT } from 'constants/routes'
const AdmitRoutesLazy = React.lazy(() => import('utfpr-admit-mfe/AdmitRoutes'))

type AdmitRoutesProps = {
  path?: string
}

const AdmitRoutes = ({ path = ADMIT }: AdmitRoutesProps) => <AdmitRoutesLazy basename={path} />

export default AdmitRoutes
