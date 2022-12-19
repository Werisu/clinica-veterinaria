export interface User {
  id?: number
  nome: string
  cpf: string
  senha: string
  email: string
  funcao: string
  dataNasc: Date
}
export type Users = User[];
