import React, { useCallback, useEffect } from 'react'
import { useDispatcher, useRoute, useSelector, useAsync } from '../hooks'
import PostItem from '../components/PostItem'
import ListHeader from '../components/ListHeader'

function Posts() {
  const { history } = useRoute()
  const issueList = useSelector(({ issues }) => issues.issueList)
  const { getIssues } = useDispatcher(({ issues }) => ({
    getIssues: issues.getIssueList,
  }))

  const navBack = useCallback(() => {
    history.goBack()
  }, [])

  const navToPost = useCallback((number) => {
    history.push(`/post/${number}`)
  }, [])

  const { isLoading, fetch } = useAsync(getIssues)

  useEffect(() => {
    if (issueList.length === 0) {
      fetch()
    }
  }, [])

  return (
    <div className="space-y-4">
      <ListHeader left="&lt; Go Back" onLeftClick={navBack} />
      {issueList.map((o) => {
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
export default Posts
