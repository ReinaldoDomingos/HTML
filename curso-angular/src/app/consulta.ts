export class Consulta {
  id: number;
  data: string;
  cidade: string;
  unidade: string;
  idade: string;
  classificacao: string;
  cor: string;
  complete: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}