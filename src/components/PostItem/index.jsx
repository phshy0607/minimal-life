import React from 'react'
import dayjs from 'dayjs'
import _noop from 'lodash/noop'

function PostItem(props) {
  const { title, date, onClick = _noop } = props
  return (
    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={onClick}
    >
      <div>{title}</div>
      <div className="hidden sm:block">
        {date && dayjs(date).format('MMMM D, YYYY h:mm A')}
      </div>
    </div>
  )
}
export default PostItem
