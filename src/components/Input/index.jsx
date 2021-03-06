import React from 'react'
import _noop from 'lodash/noop'

function Input(props) {
  const { placeholder, value, onChange = _noop, ...rest } = props
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type="text"
      className="appearance-none w-full flex-auto flex-grow-1 tracking-wider text-gray-700 font-normal placeholder-gray-300 border-gray-800 border-2 border-solid shadow-sm p-2 m-4 focus:outline-none "
      {...rest}
    />
  )
}

export default Input
