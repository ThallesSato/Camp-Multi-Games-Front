import {Time} from "./time";
import {JogoTabela} from "./jogo-tabela";

export interface JogosFuturos {
  timeCasa: Time;
  timeFora: Time;
  jogoTabela: JogoTabela;
  id: number;
}
