import { Request, Response, Router } from 'express'
import {create, login} from '../controllers/users'

const userRouter = Router()

userRouter.post('/create', create)

userRouter.post('/login', login)

export default userRouter