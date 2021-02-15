import React from 'react'
import { Collapse } from 'react-collapse'

function Layout(props) {
  const { left, right, footer } = props
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <main className="flex flex-1 md:px-2 lg:px-10 overflow-hidden">
        <div className="hidden sm:flex fixed top-1/2 left-2 flex-col transform -translate-y-1/2">
          <i
            className="cursor-pointer iconfont icon-linkedin text-4xl"
            onClick={() => {
              window.open('https://www.linkedin.com/in/haopeng67/', '__blank')
            }}
          />
          <i
            className="cursor-pointer iconfont icon-huaban88 text-4xl"
            onClick={() => {
              window.open('https://github.com/phshy0607', '__blank')
            }}
          />
          <i className="cursor-pointer iconfont icon-moon text-4xl" />
        </div>
        <div id="left" className="hidden sm:flex flex-col flex-none w-2/5">
          {left}
          {footer && <footer className="flex-initial">{footer}</footer>}
        </div>
        <div className="flex-1 overflow-auto my-6 px-4" id="right">
          {right}
        </div>
      </main>
    </div>
  )
}
export default Layout
