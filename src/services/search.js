import axios from '../utils/request'
import config from '../config'

const { username } = config

const buildQuery = (string) => {
  const parameter = `${string} user:${username}`
  return parameter
}

export function searchRepos(searchString) {
  const url = `/search/repositories`
  return axios.get(url, {
    params: {
      sort: 'created',
      q: buildQuery(searchString),
    },
  })
}

export function searchIssues(searchString) {
  const url = `/search/issues`
  return axios.get(url, {
    params: {
      sort: 'created',
      q: buildQuery(`is:issue is:closed ${searchString}`),
    },
  })
}
