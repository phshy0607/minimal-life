import _get from 'lodash/get'
import dayjs from 'dayjs'
import { fetchIssues } from '@/services/issues'

export default {
  state: {
    issueList: [],
  },
  reducers: {
    setIssueList: (state, value) => {
      return {
        ...state,
        issueList: value,
      }
    },
  },
  effects: ({ issues }) => ({
    getIssueList() {
      return fetchIssues().then((res) => {
        console.log(res)
        const data = _get(res, 'data') || []
        issues.setIssueList(data)
      })
    },
  }),
}
