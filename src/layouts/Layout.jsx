import React from 'react'

function Layout(props) {
  const { left, right, footer } = props
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <main className="flex flex-1 py-20 md:px-2 lg:px-10">
        <div className="flex-none w-2/5">{left}</div>
        <div className="flex-1">{right}</div>
      </main>
      {footer && <footer className="flex-none">{footer}</footer>}
    </div>
  )
}
export default Layout
