import { init } from '@rematch/core'
import issues from './issues'
import repos from './repos'
import global from './global'

const store = init({
  models: {
    global,
    issues,
    repos,
  },
})

export default store
