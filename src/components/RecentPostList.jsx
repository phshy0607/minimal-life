import React from 'react'
import PostItem from './PostItem'

function RecentPostList() {
  return (
    <div className="space-y-4">
      <div className="font-bold ">Recent Posts</div>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  )
}
export default RecentPostList
