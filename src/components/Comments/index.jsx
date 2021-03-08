import React, { useEffect } from 'react'
import Comment from '@/components/Comment'
import { useDispatcher, useSelector } from '@/hooks'
import ListHeader from '@/components/List/Header'

function Comments(props) {
  const { issueNumber, issueUrl } = props
  const commentList = useSelector(({ comments }) => comments.commentList)
  const fetchComments = useDispatcher(({ comments }) => comments.getComments)
  const setCommentList = useDispatcher(
    ({ comments }) => comments.setCommentList,
  )

  useEffect(() => {
    if (issueNumber) {
      fetchComments(issueNumber)
    }

    return () => {
      setCommentList([])
    }
  }, [issueNumber])

  if (commentList.length === 0) {
    return null
  }

  return (
    <div className="mt-24">
      <ListHeader
        left="Comments"
        right="Leave a comment &gt;"
        onRightClick={() => {
          window.open(issueUrl, '__blank')
        }}
      />
      <div>
        {commentList.map((comment) => {
          const { id, body, user, updated_at: updatedAt } = comment
          return (
            <Comment
              key={id}
              content={body}
              avatar={user.avatar_url}
              userName={user.login}
              date={updatedAt}
              userHtml={user.html_url}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Comments
