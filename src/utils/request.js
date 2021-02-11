import axios from 'axios'
import config from '../config'

const { accessToken } = config

const instance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${window.atob(accessToken)}`,
  },
})

export default instance
