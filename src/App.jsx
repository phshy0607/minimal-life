import React, { Suspense, useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '@/routes'
import store from '@/store'
import Layout from '@/Layout'
import Cover from '@/pages/Cover'
import useAppConfig from '@/hooks/useAppConfig'

function App() {
  useAppConfig()
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout
          left={<Cover />}
          right={<Suspense fallback={null}>{renderRoutes(routes)}</Suspense>}
          footer={
            <div className="text-gray-400 p-3">
              @ Powered By Tailwind and Vite
            </div>
          }
        />
      </HashRouter>
    </Provider>
  )
}

export default App
