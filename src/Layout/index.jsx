import React from 'react'

function Layout(props) {
  const { left, right, footer } = props
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <main className="flex flex-1 md:px-2 lg:px-10 overflow-hidden">
        <div id="left" className="hidden sm:flex flex-col flex-none w-2/5">
          {left}
          {footer && <footer className="flex-initial">{footer}</footer>}
        </div>
        <div className="flex-1 overflow-auto my-6 px-4 space-y-4" id="right">
          {right}
        </div>
      </main>
    </div>
  )
}
export default Layout
