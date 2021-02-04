import React from 'react'
import Title from '../components/Title'
import Slogan from '../components/Slogan'
import Search from '../components/Search'
import Tags from '../components/Tags'

function LeftContent() {
  return (
    <div className="min-w-max h-full flex flex-col items-center justify-center">
      <Title />
      <Slogan />
      <Search />
      <Tags />
    </div>
  )
}

export default LeftContent
