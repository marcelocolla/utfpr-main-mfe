import { AxiosInstance } from 'axios'

interface Headers {
  [key: string]: string
}

export type HttpClientType = {
  getHeaders: () => Headers
  getInstance: () => AxiosInstance
}
