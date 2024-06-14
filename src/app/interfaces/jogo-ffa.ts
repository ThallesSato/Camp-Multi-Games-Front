import { PontosPorColocacaoFfa } from "./pontos-por-colocacao-ffa";

export interface JogoFfa {
  pontosPorColocacao: PontosPorColocacaoFfa[];
  name: string;
  foto: string;
  bgImage: string;
  id: number;
}
