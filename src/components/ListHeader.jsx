import React from 'react'
import cx from 'classnames'

function ListHeader(props) {
  const {
    left,
    right,
    onLeftClick,
    onRightClick,
    classNames: _classNames,
  } = props
  const leftClassNames = cx({
    'common-action': onLeftClick,
  })
  const rightClassNames = cx({
    'common-action': onRightClick,
  })

  const classNames = cx('font-bold mb-6 flex items-center justify-between', {
    [_classNames]: _classNames,
  })

  return (
    <div className={classNames}>
      {left && (
        <span className={leftClassNames} onClick={onLeftClick}>
          {left}
        </span>
      )}
      {right && (
        <span className={rightClassNames} onClick={onRightClick}>
          {right}
        </span>
      )}
    </div>
  )
}

export default ListHeader
