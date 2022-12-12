export enum Perfil {
    ADMIN = "ADMIN",
    FUNCIONARIO = "FUNCIONARIO",
    CLIENTE= "CLIENTE"
}

export const PerfilMapping: Record<Perfil, string> = {
    [Perfil.ADMIN]: "ADMIN",
    [Perfil.FUNCIONARIO]: "FUNCIONARIO",
    [Perfil.CLIENTE]: "CLIENTE"
};
