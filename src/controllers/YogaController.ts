import { Request, Response } from "express";
import Competition from "../database/models/Competition";
import Helpers from "../helpers/Helpers";
import AthleteService from "../services/AthleteService"

export default class YogaController {
  service = new AthleteService();
  helpers = new Helpers();

  registerYogaAthlete = async (req:Request, res:Response) => {
    const {athlete, value, unity , competitionId} = req.body;
    const competitionInProgress = await Competition.findByPk(competitionId);
    if (competitionId !== 1) return res.status(401).json( {message: "Wrong competition" });
    if (!competitionInProgress) return res.status(401).json({ message: "Competition not found"});
    if (competitionInProgress.inProgress === false) return res.status(401).json({ message: "This competition is over" })
    const newAthlete = await this.service.registerAthlete(athlete, value, unity, competitionId);
    return res.status(201).json(newAthlete);
  }

  yogaChampionshipLeaderboard = async (req:Request, res:Response) => {
    const allAthletes = await this.service.getByCategory(1);
    const filteredReturn = allAthletes.map((athlete) => {
      return {
        competicao: 'campeonato de yoga',
        athlete: athlete.athlete,
        value: athlete.value,
        unity: athlete.unity,
      }
    })
    const sortedReturn = this.helpers.sortAthletes(filteredReturn);
    
    return res.status(200).json(sortedReturn);
  }
}