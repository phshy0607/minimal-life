import React from 'react'
import PostItem from './PostItem'

function RecentRepoList() {
  return (
    <div>
      <div className="font-bold mb-6">Recent Repos</div>
      <div className="space-y-4">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  )
}
export default RecentRepoList
