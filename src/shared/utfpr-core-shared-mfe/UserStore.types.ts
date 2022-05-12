export type Person = {
  id_pessoa: number
  id_departamento?: number
  tipo_usuario: number
  nome_pessoa: string
  email: string
  codigo_barra: string
}

export type UserGeneric = {
  senha: string
  matricula: string
  Pessoa: Person
}

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
