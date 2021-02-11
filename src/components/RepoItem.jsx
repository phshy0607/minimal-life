import React from 'react'
import _noop from 'lodash/noop'

function RepoItem(props) {
  const { name, stars, forks, onClick = _noop } = props
  return (
    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={onClick}
    >
      <div className="mr-auto">{name}</div>
      <div className="mr-4">Stars: {stars}</div>
      <div>Forks: {forks}</div>
    </div>
  )
}
export default RepoItem
