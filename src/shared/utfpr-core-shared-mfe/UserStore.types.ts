import { Person, UserGeneric } from 'types/user/Person'

export interface UserState {
  token: string
  pessoa?: Person
  deseg?: UserGeneric
  professor?: UserGeneric
  vigilante?: UserGeneric
}

export interface UserStoreResponse extends UserState {
  getRegistrationNumber: () => string
  updateUser: (data: UserState) => void
  resetUser: () => void
}

export type UserStoreType = () => UserStoreResponse
