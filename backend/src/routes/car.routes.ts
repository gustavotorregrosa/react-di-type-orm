import { Request, Response, Router } from 'express'
import { save, list, deleteCar } from '../controllers/cars'
import {checkJWT} from '../middleware/auth'

const carRouter = Router()

carRouter.use('/', checkJWT)
carRouter.post('/', save)

carRouter.get('/', list)

carRouter.delete('/:id', deleteCar)

export default carRouter