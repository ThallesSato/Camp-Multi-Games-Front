import { JogoTabela } from "./jogo-tabela";
import { Mapa } from "./mapa";
import { Time } from "./time";

export interface Confronto {
  timeCasa: Time;
  timeFora: Time;
  jogoTabela: JogoTabela;
  mapas: Mapa[]
  pontosCasa: number;
  pontosFora: number;
  data: string;
  id: number;
}
