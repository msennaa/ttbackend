import { Request, Response } from "express";
import Competition from "../database/models/Competition";
import CompetitionService from "../services/CompetitionService";

export default class CompetitionController {
  service = new CompetitionService();

  registerCompetition = async (req:Request, res:Response) => {
    const { competitionName } = req.body;  
    const newCompetition = await this.service.registerCompetition(competitionName);

    if (newCompetition === { message: 'Competition in progress'} ) {
      return res.status(401).json({ message: 'Competition in progress' })
    }

    return res.status(201).json(newCompetition);
  }
}