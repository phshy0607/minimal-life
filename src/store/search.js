import _get from 'lodash/get'
import { searchIssues, searchRepos } from '../services/search'

export default {
  state: {
    searchedRepos: [],
    searchedIssues: [],
    keyword: '',
  },
  reducers: {
    setKeyword: (state, value) => {
      return {
        ...state,
        keyword: value,
      }
    },
    setSearchedRepos: (state, value) => {
      return {
        ...state,
        searchedRepos: value,
      }
    },
    setSearchedIssues: (state, value) => {
      return {
        ...state,
        searchedIssues: value,
      }
    },
  },
  effects: ({ search }) => ({
    searchByKeyword(keyword) {
      const task1 = searchRepos(keyword).then((res) => {
        const data = _get(res, 'data.items') || []
        const transformed = data.filter(({ fork }) => fork === false)
        search.setSearchedRepos(transformed)
        return transformed
      })

      const task2 = searchIssues(keyword).then((res) => {
        const data = _get(res, 'data.items') || []
        search.setSearchedIssues(data)
        return data
      })

      return Promise.all([task1, task2])
    },
  }),
}
