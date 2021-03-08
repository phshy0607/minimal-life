import _get from 'lodash/get'
import { fetchRepos } from '@/services/repos'

export default {
  state: {
    repoList: [],
  },
  reducers: {
    setRepoList: (state, value) => {
      return {
        ...state,
        repoList: value,
      }
    },
  },
  effects: ({ repos }) => ({
    getRepos() {
      return fetchRepos().then((res) => {
        console.log(res)
        const data = _get(res, 'data') || []
        repos.setRepoList(data.filter(({ fork }) => fork === false))
      })
    },
  }),
}
