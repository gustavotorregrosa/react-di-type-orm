import {Router} from 'express'
import userRouter from './user.routes'
import testRouter from './test.routes'

const routes = Router()

routes.use('/user', userRouter)

routes.use('/test', testRouter)

export default routes