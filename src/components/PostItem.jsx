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
      <div>{date && dayjs(date).format('YYYY-MM-DD HH:mm')}</div>
    </div>
  )
}
export default PostItem
