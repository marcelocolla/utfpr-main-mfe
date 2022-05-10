import axios, { AxiosPromise } from 'axios'

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/',
  headers: {
    'X-App-Origin': 'utfpr-main-mfe',
    'X-App-Version': 'v1.0.0',
  },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HttpResponse<T = any> = AxiosPromise<T>

export default httpClient
