import React from 'react'
import { Switch, Route, RouteProps } from 'react-router-dom'

import { getRoutesMap } from './RoutesMap'

const RoutesApp = (): JSX.Element => {
  const findRoutes = React.useCallback(() => getRoutesMap(), [])

  const routes = findRoutes()

  return (
    <React.Suspense fallback="Carregando...">
      <Switch>
        {routes.map((route: RouteProps) => (
          <Route key={route.path?.toString()} {...route} />
        ))}
      </Switch>
    </React.Suspense>
  )
}

export default RoutesApp
