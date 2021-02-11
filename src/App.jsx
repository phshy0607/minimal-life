import React, { Suspense } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import store from './store'
import Layout from './layouts/Layout'
import LeftContent from './layouts/LeftContent'
import Footer from './layouts/Footer'

smoothscroll.polyfill()

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout
          left={<LeftContent />}
          right={<Suspense fallback={null}>{renderRoutes(routes)}</Suspense>}
          footer={<Footer />}
        />
      </HashRouter>
    </Provider>
  )
}

export default App
