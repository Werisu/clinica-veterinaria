import { Patient } from 'src/app/core/interfaces/patient';
export type Cpas = Cpa[]

export interface Cpa {
  paciente: Patient
  anamnese_geral: AnamneseGeral
  anamnese_especial: AnamneseEspecial
  exame_objetivo: ExameObjetivo
  exames_complementares: ExamesComplementares
  conclusoes: Conclusoes
  observacoes: string
}

export interface AnamneseGeral {
  id?: number
  queixaPrincipal: string
  historicoDoencaAtual: string
  antecedentesMorbidos: string
  CondicaoDeVida: string
  saudeConvivio: string
  paciente: Patient
}

export interface AnamneseEspecial {
  id?: number
  olhos: string
  ouvidos: string
  sr: string
  sc: string
  sd: string
  sgu: string
  sn: string
  historicoImunizacao: string
  anamneseGeral: AnamneseGeral
}

export interface ExameObjetivo {
  id?: number
  temperaturaRetal: string
  ectoscopia: string
  srNariz: string
  srTorazInspecaoFr: string
  tipoMovimento: string
  polpacao: string
  percussao: string
  aucusticaPulmonar: string
  scCoracaoFc: string
  ritmo: string
  aucusticaPalpacao: string
  pulsoArterial: string
  alteracoesVasculares: string
  shlLifonodos: string
  baco: string
  sdViasDigestoriasAnteriores: string
  abdomen: string
  estomago: string
  intestinos: string
  figado: string
  sgu: string
  sn: string
  orgaosSentidosOlhosOuvidos: string
  aparelhoLocomotor: string
  apreciacaoAchados: string
  diagProvisorio: string
  anamneseGeral: AnamneseGeral
}

export interface ExamesComplementares {
  id?: number
  examesComplementares: string
  anexo: string
  anamneseGeral: AnamneseGeral
}

export interface Conclusoes {
  id?: number
  diagPrincipal: string
  outrosDiags: string
  prognostico: string
  tratamentoPrescrito: string
  obs: string
  medicacoes_prescritas: MedicacoesPrescritas
  anamneseGeral: AnamneseGeral
}

export interface MedicacoesPrescritas {
  id?: number
  nomeRemedio: string
  dose: string
  frequencia: string
  anamneseGeral: AnamneseGeral
}
