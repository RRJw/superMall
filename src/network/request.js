  import axios from 'axios'

  export function request(config) {
      const instance = axios.create({
          baseURL: 'http://123.207.32.32:8000/api/v1',
          timeout: 5000
      })

      instance.interceptors.request.use(
          config => {
              return config
          },
          err => {}
      )
      instance.interceptors.response.use(res => {
          return res.data
      }, err => {})
      return instance(config)
  }