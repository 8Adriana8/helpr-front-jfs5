export enum Setor {
    MARKETING = "MARKETING",
    MANUTENCAO = "MANUTENCAO",
    RH= "RH",
    DESENVOLVIMENTO= "DESENVOLVIMENTO"
}

export const SetorMapping: Record<Setor, string> = {
    [Setor.DESENVOLVIMENTO]: "Desenvolvimento",
    [Setor.MANUTENCAO]: "Manutenção",
    [Setor.MARKETING]: "Marketing",
    [Setor.RH]: "RH"
};
