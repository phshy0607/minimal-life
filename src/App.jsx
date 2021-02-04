import React from 'react'
import Layout from './layouts/Layout'
import Footer from './layouts/Footer'
import LeftContent from './layouts/LeftContent'
import RightContent from './layouts/RightContent'

function App() {
  return (
    <Layout
      left={<LeftContent />}
      right={<RightContent />}
      footer={<Footer />}
    />
  )
}

export default App
