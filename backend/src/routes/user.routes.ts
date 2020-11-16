import { Request, Response, Router } from 'express'
import { getRepository } from 'typeorm'
import User from '../models/User'

const userRouter = Router()

userRouter.post('/', async (request: Request, response: Response) => {
    try {
        const repo = getRepository(User)
        const user = await repo.save(request.body)
        response.status(201).json(user)
    } catch(err) {
        console.log(err.message)
    }
    
})

export default userRouter