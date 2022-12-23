import { Owner } from './owner';
export type Patients = Patient[]

export interface Patient {
  id: number
  nome: string
  especie: string
  fc: string
  idade: number
  sexo: string
  raca: string
  cor: string
  peso: string
  proprietario: Owner
}
