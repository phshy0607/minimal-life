import { lazy } from 'react'
import Home from '../pages/Home'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/posts',
    exact: true,
    component: lazy(() =>
      import(/* webpackChunkName: "Posts" */ '../pages/Posts'),
    ),
  },
  {
    path: '/post/:number',
    exact: true,
    component: lazy(() =>
      import(/* webpackChunkName: "Post" */ '../pages/Post'),
    ),
  },
]

export default routes
