import { Request, Response } from "express";
import Competition from "../database/models/Competition";
import Helpers from "../helpers/Helpers";
import AthleteService from "../services/AthleteService"
import CompetitionService from "../services/CompetitionService";

const competitionId = 4;

export default class DartController {
  service = new AthleteService();
  helpers = new Helpers();
  competitionService = new CompetitionService();

  registerDartAthlete = async (req:Request, res:Response) => {
    const {athlete, value, unity} = req.body;
    const competitionInProgress = await Competition.findByPk(competitionId);
    if (!competitionInProgress) return res.status(401).json({ message: "Competition not found"});
    if (competitionInProgress.inProgress === false) return res.status(401).json({ message: "This competition is over" })
    const newAthlete = await this.service.registerAthlete(athlete, value, unity, competitionId);
    return res.status(201).json(newAthlete);
  }

  dartChampionshipLeaderboard = async (req:Request, res:Response) => {
    const allAthletes = await this.service.getByCategory(competitionId);
    const filteredReturn = allAthletes.map((athlete) => {
      return {
        posicao: 0,
        competicao: 'campeonato de dardos',
        atleta: athlete.athlete,
        valor: athlete.value,
        unidade: athlete.unity,
      }
    })
    const sortedReturn = this.helpers.sortInvertedAthletes(filteredReturn);

    const addPosition = sortedReturn.map((athlete, index) => {
      return {
        posicao: index + 1,
        competicao: 'campeonato de dardos',
        atleta: athlete.atleta,
        valor: athlete.valor,
        unity: athlete.unidade,
      }
    });
    return res.status(200).json(addPosition);
  }

  updateDartCompetition = async (req:Request, res:Response) => {
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