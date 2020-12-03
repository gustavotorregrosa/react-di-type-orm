import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const checkJWT = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const token: string = request.headers.jwt as string

    jwt.verify(token, process.env.JWT_KEY!, (error, decoded: any) => {

        if(error){
            return response.status(401).send({
                message: 'Not authorized'
            })
        }

        let expiresIn = decoded.iat + 60*60 // 1 hour
        let now = (new Date().getTime())/1000
        if((expiresIn + 2*60*60) < now){ //2 hours 2*60*60
            return response.status(403).send({
                message: 'Not authorized'
            })
        }

        if(expiresIn < now){
            return response.status(300).send({
                message: 'Renew certificate'
            })
        }

        next()
    })
  
}