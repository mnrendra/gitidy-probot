import { Request, Response } from 'express'

const init = (req: Request, res: Response) => {
  res.status(200).json({
    message: 'hello!'
  })
}

export default init
