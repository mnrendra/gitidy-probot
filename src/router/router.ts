import express, { Router } from 'express'
import { GetRouter } from './type'

const router = (getRouter: GetRouter | undefined) => {
  if (getRouter) return getRouter
  const app = express()
  return (path = '/') => app.use(path, Router())
}

export default router
