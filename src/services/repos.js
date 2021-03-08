import axios from '@/utils/request'
import config from '@/config'

const { username } = config

export function fetchRepos() {
  const url = `/users/${username}/repos`
  return axios.get(url, {
    params: {
      sort: 'created',
    },
  })
}
