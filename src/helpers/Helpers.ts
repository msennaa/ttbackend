import IAthlete from "../interface/athleteInterface";

export default class Helpers {
  sortAthletes = (array:IAthlete[]) => {
    const teste = array.sort((a, b) => {
      if (a.unity > b.unity)
        return 1;
      if (a.unity < b.unity)
        return -1;
      if (Number(a.value) > Number(b.value))
        return -1;
      if (Number(a.value) < Number(b.value))
        return 1;  
      return 0;
    })
    return teste
  }

  sortInvertedAthletes = (array:IAthlete[]) => {
    const teste = array.sort((a, b) => {
      if (a.unity < b.unity)
        return 1;
      if (a.unity > b.unity)
        return -1;
      if (Number(a.value) > Number(b.value))
        return -1;
      if (Number(a.value) < Number(b.value))
        return 1;  
      return 0;
    })
    return teste
  }
}