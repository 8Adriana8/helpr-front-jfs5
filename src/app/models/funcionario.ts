import { Cargo } from "./cargo";
import { Perfil } from "./enums/perfil";

export interface Funcionario {
    id?: number;
    nome: string;
    cpf: string;
    email: string;    
    senha?: string;
    cargo: Cargo;
    foto?: string;
    perfil?: Perfil;
}
