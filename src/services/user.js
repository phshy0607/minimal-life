import axios from '@/utils/request'
import config from '@/config'

const { username } = config

export function fetchUserInfo() {
  const url = `/users/${username}`
  return axios.get(url)
}

// export function fetchIssuesByTitle (title) {
//   let url = `/search/issues?q=repo:${username}/${issueRepo}+${title} in:title`;
//   return axios.get(url)
// }

// export function fetchIssueByNumber (number) {
//   let url = `/repos/${issueRepo}/issues/${number}`;
//   return axios.get(url)
// }
