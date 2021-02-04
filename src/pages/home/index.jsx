import React from 'react'
import Footer from '../../layouts/Footer'
import Layout from '../../layouts/Layout'
import LeftContent from '../../layouts/LeftContent'
import RightContent from '../../layouts/RightContent'
import { useRoute } from '../../hooks'

function Home() {
  const route = useRoute()
  console.log(route)
  return (
    <Layout
      left={<LeftContent />}
      right={<RightContent />}
      footer={<Footer />}
    />
  )
}

export default Home
