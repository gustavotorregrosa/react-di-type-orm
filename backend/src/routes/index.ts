import {Router} from 'express'
import userRouter from './user.routes'
import testRouter from './test.routes'
import carRouter from './car.routes'

const routes = Router()

routes.use('/user', userRouter)

routes.use('/car', carRouter)

routes.use('/test', testRouter)

export default routes