import { Request, Response, Router } from 'express'
import {testFunction} from '../controllers/test'
import {checkJWT} from '../middleware/auth'

const testRouter = Router()

testRouter.use('/', checkJWT)
testRouter.get('/testfunction', testFunction)

export default testRouter