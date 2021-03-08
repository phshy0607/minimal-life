import React, { useCallback } from 'react'
import { formatDate } from '@/utils'

function Comment(props) {
  const { avatar, userName, content, date, userHtml } = props

  const onUserClick = useCallback(() => {
    window.open(userHtml, '__blank')
  }, [])

  return (
    <div className="py-4 flex">
      <img
        src={avatar}
        className="w-10 h-10 flex-initial mr-4 mt-1 rounded-full border border-gray-200"
        alt="avatar"
      />
      <div className="flex-1 border rounded-lg mt-1 bg-gray-100 common-arrow-left border-gray-200">
        <div className="border-b border-gray-300 py-2 px-4">
          <span className="common-action font-normal" onClick={onUserClick}>
            {userName}
          </span>
          <span> commented at </span>
          <span>{formatDate(date, 'MMMM D, YYYY h:mm A')}</span>
        </div>
        <div
          className="markdown py-2 px-4 bg-white rounded-b-lg"
          dangerouslySetInnerHTML={{ __html: window.marked(content) }}
        />
      </div>
    </div>
  )
}

export default Comment
