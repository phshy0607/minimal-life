import React, { Suspense } from 'react'
import { HashRouter, useRouteMatch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

function App() {
  return (
    <HashRouter>
      <Suspense fallback={null}>{renderRoutes(routes)}</Suspense>
    </HashRouter>
  )
}

export default App
