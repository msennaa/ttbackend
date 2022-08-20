import { Request, Response } from "express";
import Competition from "../database/models/Competition";
import Helpers from "../helpers/Helpers";
import AthleteService from "../services/AthleteService"

export default class AthleteController {
  service = new AthleteService();
  helpers = new Helpers();
  getAll = async (req:Request, res:Response) => {
    const allAthletes = await this.service.getAll();
    return res.status(200).json(allAthletes);
  }

  registerAthlete = async (req:Request, res:Response) => {
    const {athlete, value, unity , competitionId} = req.body;
    const competitionInProgress = await Competition.findByPk(competitionId);
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

  hidratationChampionshipLeaderboard = async (req:Request, res:Response) => {
    const allAthletes = await this.service.getByCategory(2);
    const filteredReturn = allAthletes.map((athlete) => {
      return {
        competicao: 'campeonato de hidratação',
        athlete: athlete.athlete,
        value: athlete.value,
        unity: athlete.unity,
      }
    })
    const sortedReturn = this.helpers.sortAthletes(filteredReturn);
    
    return res.status(200).json(sortedReturn);
  }

  loseWeightChampionshipLeaderboard = async (req:Request, res:Response) => {
    const allAthletes = await this.service.getByCategory(3);
    const filteredReturn = allAthletes.map((athlete) => {
      return {
        competicao: 'campeonato de perda de peso',
        athlete: athlete.athlete,
        value: athlete.value,
        unity: athlete.unity,
      }
    })
    const sortedReturn = this.helpers.sortInvertedAthletes(filteredReturn);
    
    return res.status(200).json(sortedReturn);
  }

  dartChampionshipLeaderboard = async (req:Request, res:Response) => {
    const allAthletes = await this.service.getByCategory(4);
    const filteredReturn = allAthletes.map((athlete) => {
      return {
        competicao: 'campeonato de dardos',
        athlete: athlete.athlete,
        value: athlete.value,
        unity: athlete.unity,
      }
    })
    const sortedReturn = this.helpers.sortInvertedAthletes(filteredReturn);
    
    return res.status(200).json(sortedReturn);
  }
}