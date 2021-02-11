import React, { useCallback, useEffect, useMemo, useState } from 'react'
import _toString from 'lodash/toString'
import { useRoute, useSelector } from '../hooks'
import { fetchIssueByIssueNumber } from '../services/issues'
import '../style/markdown.scss'
import ListHeader from '../components/ListHeader'
import GoTop from '../components/GoTop'

function Post() {
  const { params, history } = useRoute()
  const issueList = useSelector(({ issues }) => issues.issueList)
  const [post, setPost] = useState(null)

  useEffect(() => {
    window.marked.setOptions({
      renderer: new window.marked.Renderer(),
      highlight(code, language) {
        const hljs = window.hljs
        const validLanguage = hljs.getLanguage(language)
          ? language
          : 'plaintext'
        return hljs.highlight(validLanguage, code).value
      },
      gfm: true,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    })

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
            September 5, 2019 by {username}
          </div>
        )}
      </div>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
      <ListHeader
        classNames="mt-6 mb-2"
        left="&lt; Go Back"
        onLeftClick={navBack}
      />
      <GoTop />
    </div>
  )
}

export default Post
