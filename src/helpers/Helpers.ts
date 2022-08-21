import IAthlete from "../interface/athleteInterface";

export default class Helpers {
  sortAthletes = (array:IAthlete[]) => {
    const sortedArray = array.sort((a, b) => {
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
    return sortedArray
  }

  sortInvertedAthletes = (array:IAthlete[]) => {
    const sortedArray = array.sort((a, b) => {
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
    return sortedArray
  }
}