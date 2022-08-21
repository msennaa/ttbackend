import IAthlete from "../interface/athleteInterface";

export default class Helpers {
  sortAthletes = (array:IAthlete[]) => {
    const teste = array.sort((a, b) => {
      if (a.unidade > b.unidade)
        return 1;
      if (a.unidade < b.unidade)
        return -1;
      if (Number(a.valor) > Number(b.valor))
        return -1;
      if (Number(a.valor) < Number(b.valor))
        return 1;  
      return 0;
    })
    return teste
  }

  sortInvertedAthletes = (array:IAthlete[]) => {
    const teste = array.sort((a, b) => {
      if (a.unidade < b.unidade)
        return 1;
      if (a.unidade > b.unidade)
        return -1;
      if (Number(a.valor) > Number(b.valor))
        return -1;
      if (Number(a.valor) < Number(b.valor))
        return 1;  
      return 0;
    })
    return teste
  }
}