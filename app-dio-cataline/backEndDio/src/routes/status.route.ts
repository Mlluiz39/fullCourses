import { NextFunction, Request, Response, Router } from "express";

const statusRoute = Router()

statusRoute.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.send('Seja Bem Vindo!')
})

export default statusRoute