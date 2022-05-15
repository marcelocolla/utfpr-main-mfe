import React from 'react'
import { Route, RouteProps } from 'react-router-dom'

import { getRoutesMap } from './RoutesMap'

const RoutesApp = (): JSX.Element => {
  const findRoutes = React.useCallback(() => getRoutesMap(), [])

  const routes = findRoutes()

  return (
    <React.Suspense fallback="Carregando...">
      {routes.map((route: RouteProps) => (
        <Route key={route.path?.toString()} {...route} />
      ))}
    </React.Suspense>
  )
}

export default RoutesApp
