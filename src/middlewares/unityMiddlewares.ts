import { NextFunction, Request, Response } from "express";

export const unityYogaMiddleware = (req:Request, res:Response, next: NextFunction) => {
  const { unity } = req.body;

  if (!unity || unity === '') {
    return res.status(401).json({ message: "Unity is required" });
  }

  if (typeof unity !== 'string') {
    return res.status(401).json({ message: "Unity must be a string" });
  }

  if (unity !== 's' && unity !== 'm') {
    return res.status(401).json({ message: "Invalid unity" });
  }

  next();
}

export const unityHidratationMiddleware = (req:Request, res:Response, next: NextFunction) => {
  const { unity } = req.body;

  if (!unity || unity === '') {
    return res.status(401).json({ message: "Unity is required" });
  }

  if (typeof unity !== 'string') {
    return res.status(401).json({ message: "Unity must be a string" });
  }

  if (unity !== 'l' && unity !== 'ml') {
    return res.status(401).json({ message: "Invalid unity" });
  }

  next();
}

export const unityLoseWeightMiddleware = (req:Request, res:Response, next: NextFunction) => {
  const { unity } = req.body;

  if (!unity || unity === '') {
    return res.status(401).json({ message: "Unity is required" });
  }

  if (typeof unity !== 'string') {
    return res.status(401).json({ message: "Unity must be a string" });
  }

  if (unity !== 'kg' && unity !== 'g') {
    return res.status(401).json({ message: "Invalid unity" });
  }

  next();
}

export const unityDartMiddleware = (req:Request, res:Response, next: NextFunction) => {
  const { unity } = req.body;

  if (!unity || unity === '') {
    return res.status(401).json({ message: "Unity is required" });
  }

  if (typeof unity !== 'string') {
    return res.status(401).json({ message: "Unity must be a string" });
  }

  if (unity !== 'm' && unity !== 'cm') {
    return res.status(401).json({ message: "Invalid unity" });
  }

  next();
}
