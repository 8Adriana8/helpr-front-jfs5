import { Cargo } from "./cargo";

export interface Funcionario {
    id?: number;
    nome: string;
    cpf: string;
    email: string;    
    senha?: string;
    cargo: Cargo;
    foto?: string;
    perfil?: string;
}