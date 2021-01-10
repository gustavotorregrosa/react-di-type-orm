import { Request, Response, Router } from 'express'
import {create, login, renewJWT} from '../controllers/users'

const userRouter = Router()

userRouter.post('/create', create)

userRouter.post('/login', login)

userRouter.post('/refresh', renewJWT)

export default userRouter