import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import RoutesApp from './RoutesApp'

const MainApp = (): JSX.Element => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <RoutesApp />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default MainApp
