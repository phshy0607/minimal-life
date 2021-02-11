import React, { useCallback, useEffect, useMemo } from 'react'
import _take from 'lodash/take'
import { useAsync, useDispatcher, useRoute, useSelector } from '../hooks'
import PostItem from './PostItem'
import ListHeader from './ListHeader'

function RecentPostList() {
  const { history } = useRoute()
  const issueList = useSelector(({ issues }) => issues.issueList)
  const { getIssues } = useDispatcher(({ issues }) => ({
    getIssues: issues.getIssueList,
  }))

  const { isLoading, fetch } = useAsync(getIssues)

  useEffect(() => {
    if (issueList.length === 0) {
      fetch()
    }
  }, [])

  const recentPosts = useMemo(() => {
    return _take(issueList, 5)
  }, [issueList])

  const navToPosts = useCallback(() => {
    history.push('/posts')
  }, [])

  const navToPost = (number) => {
    history.push(`/post/${number}`)
  }
  return (
    <div className="space-y-4">
      <ListHeader
        left="Recent Posts"
        right="View All &gt;"
        onRightClick={navToPosts}
      />
      {recentPosts.map((o) => {
        const { number, title, updated_at: updatedAt } = o
        return (
          <PostItem
            key={number}
            title={title}
            date={updatedAt}
            onClick={() => {
              navToPost(number)
            }}
          />
        )
      })}
    </div>
  )
}
export default RecentPostList
