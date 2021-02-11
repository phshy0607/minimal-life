import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import cx from 'classnames'

function GoTop(props) {
  const { scrollElement, threshold = 20 } = props
  const $scrollElement = useRef(null)
  const [scrollTop, setScrollTop] = useState(0)

  // set up scroll element
  useEffect(() => {
    if (scrollElement) {
      if (typeof scrollElement === 'string') {
        $scrollElement.current = document.querySelector(scrollElement)
      } else {
        $scrollElement.current = scrollElement
      }
    }
    $scrollElement.current = document.querySelector('#right')
  }, [])

  const onScroll = useCallback((e) => {
    setScrollTop($scrollElement?.current?.scrollTop || 0)
  }, [])

  // bind scroll event
  useEffect(() => {
    if ($scrollElement.current) {
      console.log('attach')
      $scrollElement.current.addEventListener('scroll', onScroll)
    }

    return () => {
      console.log('remove')
      $scrollElement?.current?.removeEventListener('scroll', onScroll)
    }
  }, [$scrollElement.current])

  const shouldShow = useMemo(() => {
    return scrollTop > threshold
  }, [scrollTop])

  const classNames = cx('fixed right-2 bottom-2 text-3xl cursor-pointer', {
    block: shouldShow,
    hidden: !shouldShow,
  })
  return (
    <div
      className={classNames}
      onClick={() => {
        $scrollElement.current.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }}
    >
      ⇧
    </div>
  )
}

export default GoTop
