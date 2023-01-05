import { Router, Request, Response } from 'express'

import init from './init'

const gitidy = (router: Router) => {
  router.get('/init', init)

  router.all('*', (req: Request, res: Response) => {
    res.status(404).json({
      message: 'Not Found'
    })
  })
}

export default gitidy
