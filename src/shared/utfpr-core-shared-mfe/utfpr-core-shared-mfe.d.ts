/// <reference types="react" />

import { HttpClientType } from './HttpClient.types'
import { UserStoreType } from './UserStore.types'

// webpack module federation remotes
declare module 'utfpr-core-shared-mfe/HttpClient' {
  const HttpClient: HttpClientType

  export default HttpClient
}

declare module 'utfpr-core-shared-mfe/UserStore' {
  const UserStore: UserStoreType

  export default UserStore
}
