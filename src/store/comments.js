import _get from 'lodash/get'
import { fetchCommentsByIssueNumber } from '@/services/comments'

export default {
  state: {
    commentList: [],
  },
  reducers: {
    setCommentList: (state, value) => {
      return {
        ...state,
        commentList: value,
      }
    },
  },
  effects: ({ comments }) => ({
    getComments(issueNumber) {
      return fetchCommentsByIssueNumber(issueNumber).then((res) => {
        const data = _get(res, 'data') || []
        comments.setCommentList(data)
      })
    },
  }),
}
