import React from 'react'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Title from './components/Title'
import LeftContent from './components/LeftContent'
import RightContent from './components/RightContent'

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
