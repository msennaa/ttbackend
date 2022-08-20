import Competition from "../database/models/Competition"

export default class CompetitionService {
  registerCompetition = async (competitionName:string, inProgress:boolean = true) => {
    const allCompetition = await Competition.findAll();
    const filterCompetition = allCompetition.filter((competition) => competition.competitionName === competitionName);
    
    if (filterCompetition.length > 0) {
      return { message: "Competition already exists"}
    }
    
    const newCompetition = Competition.create({ competitionName, inProgress });
    return newCompetition;
  }

  enableAndDisableCompetition =  async (id:number, inProgress:boolean) => {
    const updateCompetition = await Competition.update({ inProgress }, { where: { id } })
    return updateCompetition;
  }

}