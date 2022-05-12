export interface Person {
  id_pessoa: number
  id_departamento?: number
  tipo_usuario: number
  nome_pessoa: string
  email: string
  codigo_barra: string
}

export interface UserGeneric {
  senha: string
  matricula: string
  Pessoa: Person
}
