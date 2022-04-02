import axios, { AxiosError } from 'axios'
import { parseCookies, setCookie } from 'nookies'
import { signOut } from '../context/AuthContext'

type FailedRequestQueue = {
  onSuccess: (token: string) => void
  onFailure: (error: AxiosError) => void
}

let cookies = parseCookies()
let isRefreshing = false
let failedRequestQueue = Array<FailedRequestQueue>()

export const api = axios.create({
  baseURL: 'https://thiagosgdev.com/'
})
api.defaults.headers.common['Authorization'] = `Bearer ${cookies.joinMeToken}}`

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.response?.data.code === 'token.expired') {
        cookies = parseCookies()
        const { joinMeRefreshToken } = cookies
        const originalConfig = error.config // all info about old requests

        if (!isRefreshing) {
          isRefreshing = true
          api
            .post('users/refresh', {
              joinMeRefreshToken
            })
            .then((response) => {
              const { newToken, newRefreshToken } = response.data

              setCookie(undefined, 'joinMeToken', newToken, {
                maxAge: 60 * 60 * 24 * 30, //30 days
                path: '/'
              })
              setCookie(undefined, 'joinMeRefreshToken', newRefreshToken, {
                maxAge: 60 * 60 * 24 * 30, //30 days
                path: '/'
              })
              api.defaults.headers.common[
                'Authorization'
              ] = `Bearer ${cookies.joinMeToken}}`

              failedRequestQueue.forEach((request) =>
                request.onSuccess(newToken)
              )
              failedRequestQueue = []
            })
            .catch((err) => {
              failedRequestQueue.forEach((request) => request.onFailure(err))
              failedRequestQueue = []

              if (typeof window !== 'undefined') {
                signOut()
              }
            })
            .finally(() => {
              isRefreshing = false
            })
        }

        return new Promise((resolve, reject) => {
          failedRequestQueue.push({
            onSuccess: (token: string) => {
              if (!originalConfig.headers) return
              originalConfig.headers['Authorization'] = `Bearer ${token}`

              resolve(api(originalConfig)) // redoing requests
            },
            onFailure: (error: AxiosError) => {
              reject(error)
            }
          })
        })
      } else {
        if (typeof window !== 'undefined') {
          signOut()
        }
      }
    }
    return Promise.reject(error)
  }
)
