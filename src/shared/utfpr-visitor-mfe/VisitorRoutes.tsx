import React from 'react'

import { VISITOR } from 'constants/routes'
const VisitorRoutesLazy = React.lazy(() => import('utfpr-visitor-mfe/VisitorRoutes'))

type VisitorRoutesProps = {
  path?: string
}

const VisitorRoutes = ({ path = VISITOR }: VisitorRoutesProps) => (
  <VisitorRoutesLazy basename={path} />
)

export default VisitorRoutes
