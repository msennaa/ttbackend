import { Request, Response } from "express";
import Competition from "../database/models/Competition";
import Helpers from "../helpers/Helpers";
import AthleteService from "../services/AthleteService"
import CompetitionService from "../services/CompetitionService";

const competitionId = 3;

export default class WeightController {
  service = new AthleteService();
  helpers = new Helpers();
  competitionService = new CompetitionService();

  registerWeightAthlete = async (req:Request, res:Response) => {
    const {athlete, value, unity} = req.body;
    const competitionInProgress = await Competition.findByPk(competitionId);
    if (!competitionInProgress) return res.status(401).json({ message: "Competition not found"});
    if (competitionInProgress.inProgress === false) return res.status(401).json({ message: "This competition is over" })
    const newAthlete = await this.service.registerAthlete(athlete, value, unity, competitionId);
    return res.status(201).json(newAthlete);
  }

  loseWeightChampionshipLeaderboard = async (req:Request, res:Response) => {
    const allAthletes = await this.service.getAthletesByCategory(competitionId);
    const mapingAthletesArray = allAthletes.map((athlete) => {
      return {
        posicao: 0,
        competicao: 'campeonato de perda de peso',
        atleta: athlete.athlete,
        valor: athlete.value,
        unidade: athlete.unity,
      }
    })
    const sortedReturn = this.helpers.sortInvertedAthletes(mapingAthletesArray); 
    const addPosition = sortedReturn.map((athlete, index) => {
      return {
        posicao: index + 1,
        competicao: 'campeonato de perda de peso',
        atleta: athlete.atleta,
        valor: athlete.valor,
        unity: athlete.unidade,
      }
    });
    return res.status(200).json(addPosition);
  }

  updateWeightCompetition = async (req:Request, res:Response) => {
    const findCompetition = await Competition.findByPk(competitionId)
    if (!findCompetition) {
      return res.status(401).json({ message: 'Competition not found' })
    }
    const {inProgress} = findCompetition;
    await this.competitionService.enableAndDisableCompetition(competitionId, !inProgress);
    if (inProgress) {
      return res.status(200).json({ message: "Finishing competition" })
    }
    return res.status(200).json({ message: "Restarting competition" })
  }  
}