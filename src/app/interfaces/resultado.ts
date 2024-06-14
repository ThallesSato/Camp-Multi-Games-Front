import { JogoTabela } from "./jogo-tabela";
import { Time } from "./time";

export interface Resultado {
  timeCasa: Time;
  timeFora: Time;
  jogoTabela: JogoTabela;
  pontosCasa: number;
  pontosFora: number;
  data: string;
  id: number;
}
