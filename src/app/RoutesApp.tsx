import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import useUserStore from 'shared/utfpr-core-shared-mfe/UserStore'

import { getRoutesMap } from './RoutesMap'

const RoutesApp = (): JSX.Element => {
  const user = useUserStore?.()

  const findRoutes = React.useCallback(() => getRoutesMap(user?.redirectAuth), [])

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
