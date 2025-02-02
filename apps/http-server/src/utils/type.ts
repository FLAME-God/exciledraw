import { NextFunction, Request, Response } from "express";

interface AuthenticatedRequest extends Request {
    userId?: string;
  }
  
  export type AuthenticatedRequestHandler = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => void;