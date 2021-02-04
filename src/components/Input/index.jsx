import React from 'react'
import _noop from 'lodash/noop'
import './index.scss'

function Input(props) {
  const { placeholder, value, onChange = _noop } = props
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type="text"
      className="appearance-none w-80 text-gray-700 font-bold placeholder-gray-300 border-gray-800 border-2 border-solid shadow-sm p-2 m-4 focus:outline-none "
    />
  )
}

export default Input
