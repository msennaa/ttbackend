import { NextFunction, Request, Response } from "express";

export const competitionMiddleware = (req:Request, res:Response, next:NextFunction) => {
  const {competitionName} = req.body;

  if (!competitionName || competitionName === '') {
    return res.status(401).json({ message: '"competitionName" is required' });
  }

  if (typeof competitionName !== 'string') {
    return res.status(401).json({ message: '"competitionName" must be a string' });
  }

  if (competitionName.length < 3) {
    return res.status(401).json({ message: '"competitionName" must be at least 3 characters' });
  }

  next();
}