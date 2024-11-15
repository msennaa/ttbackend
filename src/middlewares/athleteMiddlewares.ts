import { NextFunction, Request, Response } from "express";

export const athleteNameMiddleware = (req:Request, res:Response, next: NextFunction) => {
  const { athlete } = req.body;

  if (!athlete || athlete === '') {
    return res.status(401).json({ message: "Athlete is required" });
  }

  if (typeof athlete !== 'string') {
    return res.status(401).json({ message: "Athlete must be a string" });
  }

  if (athlete.length < 3) {
    return res.status(401).json({ message: "Athlete must be at least 3 characters" });
  }

  next();
}

export const valueMiddleware = (req:Request, res:Response, next: NextFunction) => {
  const { value } = req.body;

  if (!value || value === '') {
    return res.status(401).json({ message: "Value is required" });
  }

  if (typeof value !== 'string') {
    return res.status(401).json({ message: "Value must be a string" });
  }

  if (!Number(value) || Number(value) < 0) {
    return res.status(401).json({ message: "Invalid value" });
  }

  next();
}
