import React, { useEffect, useState } from 'react'
import _sample from 'lodash/sample'

const slogans = [
  'Simplicity is the ultimate sophistication.',
  'What you hold holds you.',
  'The simplest things are often the truest.',
  'Smile, breathe and go slowly.',
  'Live simply so that others may simply live.',
  '大道至简，人生亦简',
  '大道至简，知易行难',
]

function Slogan() {
  const [target, setTarget] = useState(_sample(slogans))

  const pick = () => {
    setTarget(_sample(slogans))
  }
  useEffect(() => {
    const timerId = setInterval(() => {
      pick()
    }, 10000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <div className="mt-2 max-w-max select-none animate-pulse">
      <div onClick={pick}>{target}</div>
    </div>
  )
}

export default Slogan
