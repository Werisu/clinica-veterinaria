import { Owner } from './owner';
export type Patients = Patient[]

export interface Patient {
  id: number
  nome: string
  especie: string
  raca: string
  idade: string
  sexo: any
  corPelagem: string
  dataEntrada: string
  proprietario: Owner
}
