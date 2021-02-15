import { init } from '@rematch/core'
import issues from './issues'
import repos from './repos'
import global from './global'
import comments from './comments'
import search from './search'

const store = init({
  models: {
    global,
    issues,
    repos,
    comments,
    search,
  },
})

export default store
