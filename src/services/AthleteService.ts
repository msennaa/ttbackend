import Athlete from "../database/models/Athlete"
import Competition from "../database/models/Competition";
import IAthlete from "../interface/athleteInterface";

export default class AthleteService {
  getAll = async () => {
    const allAthletes = await Athlete.findAll({
      attributes: {exclude: ['id', 'competitionId']},
      include: [
        {model: Competition, as: 'competition', attributes: ['competitionName']}
      ]
    });    

    return allAthletes;
  }

  getByCategory = async (category:number) => {
    const allAthletes = await Athlete.findAll({
      include: [
        {model: Competition, as: 'competition', attributes: ['competitionName']}
      ]
    });

    const filter = allAthletes.filter((athlete) => athlete.competitionId == category);
    
    return filter;
  }

  registerAthlete = async (athlete:string, value:string, unity:string, competitionId:number) => {
    const newAthlete = await Athlete.create({ athlete, value, unity, competitionId });
    return newAthlete;
  }

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