import React, { useCallback, useEffect, useMemo, useState } from 'react'
import _toString from 'lodash/toString'
import Comments from '@/components/Comments'
import GoTop from '@/components/GoTop'
import { fetchIssueByIssueNumber } from '@/services/issues'
import { useRoute, useSelector } from '@/hooks'
import ListHeader from '@/components/List/Header'
import { formatDate } from '@/utils'
import '@/style/markdown.scss'

function Post() {
  const { params, history } = useRoute()
  const issueList = useSelector(({ issues }) => issues.issueList)

  const [post, setPost] = useState(null)

  useEffect(() => {
    const target = issueList.find((o) => {
      return _toString(o.number) === _toString(params.number)
    })
    if (target) {
      setPost(target)
    } else {
      fetchIssueByIssueNumber(params.number).then((res) => {
        setPost(res.data || null)
      })
    }
  }, [])

  const navBack = useCallback(() => {
    history.goBack()
  }, [])

  const content = useMemo(() => {
    if (!post?.body) {
      return null
    }

    return window.marked(post.body)
  }, [post])

  const username = post?.user?.login

  return (
    <div>
      <ListHeader left="&lt; Go Back" onLeftClick={navBack} />
      <div className="mb-16">
        <div className="text-2xl mb-2 font-semibold">{post?.title}</div>
        {username && (
          <div className="text-base font-extralight">
            {formatDate(post?.updated_at, 'MMMM D, YYYY h:mm A')} by {username}
          </div>
        )}
      </div>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />

      <Comments issueNumber={post?.number} issueUrl={post?.html_url} />
      <GoTop />
      <ListHeader
        classNames="mt-6 mb-2"
        left="&lt; Go Back"
        onLeftClick={navBack}
      />
    </div>
  )
}

export default Post
