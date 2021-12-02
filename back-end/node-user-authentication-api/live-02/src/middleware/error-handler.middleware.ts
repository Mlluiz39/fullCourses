import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import DataBaseError from '@/models/errors/database.error.models'


const errorHandler = () => (error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof DataBaseError) {
    res.sendStatus(StatusCodes.BAD_REQUEST)
  } else {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

export default errorHandler



