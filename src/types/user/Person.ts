export interface Person {
  id_pessoa: number
  tipo_usuario: number
  nome_pessoa: string
  email: string
  codigo_barra: string
}

export interface UserGeneric {
  id_pessoa: number
  matricula: string
  id_deseg?: number
  id_departamento?: number
}
