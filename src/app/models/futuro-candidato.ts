import { Setor } from "./enums/setor"

export interface FuturoCandidato {
    idCandidato?: number
    nomeCompleto: string
    email: string
    descricaoHabilidades: string
    setor: Setor
}
