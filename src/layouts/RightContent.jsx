import React from 'react'
import RecentPostList from '../components/RecentPostList'
import RecentRepoList from '../components/RecentRepoList'

function RightContent() {
  return (
    <div className="space-y-20">
      <RecentPostList />
      <RecentRepoList />
    </div>
  )
}

export default RightContent
