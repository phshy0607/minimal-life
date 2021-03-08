import axios from '@/utils/request'
import config from '@/config'

const { username, issueRepo } = config

export function fetchCommentsByIssueNumber(issueNumber) {
  const url = `/repos/${username}/${issueRepo}/issues/${issueNumber}/comments`
  return axios.get(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  })
}
