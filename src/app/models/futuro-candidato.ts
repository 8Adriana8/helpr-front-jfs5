export interface FuturoCandidato {
    idCandidato?: number
    nomeCompleto: string
    email: string
    descricaoHabilidades: string
    setor: setor
}

enum setor {
    MARKETING,
    MANUTENCAO,
    RH,
    DESENVOLVIMENTO
}