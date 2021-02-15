import axios from '../utils/request'
import config from '../config'

const { username, issueRepo } = config

export function fetchIssues() {
  const url = `/repos/${username}/${issueRepo}/issues`
  return axios.get(url, {
    params: {
      sort: 'created',
      state: 'closed',
    },
    headers: {
      Accept: 'application/vnd.github.v3.raw+json',
    },
  })
}

export function fetchIssueByIssueNumber(issueNumber) {
  const url = `/repos/${username}/${issueRepo}/issues/${issueNumber}`
  return axios.get(url, {
    headers: {
      Accept: 'application/vnd.github.v3.raw+json',
    },
  })
}
