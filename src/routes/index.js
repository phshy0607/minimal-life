import { lazy } from 'react'

const routes = [
  {
    path: '/home',
    exact: true,
    component: lazy(() =>
      import(/* webpackChunkName: "OperatePackage" */ '../pages/home'),
    ),
  },
]

export default routes
