import { Request, Response, Router } from 'express'
import { save } from '../controllers/cars'

const carRouter = Router()

carRouter.post('/save', save)

export default carRouter