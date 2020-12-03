import { Request, Response, NextFunction } from 'express'

export const testFunction = async (request: Request, response: Response, next: NextFunction) => {
    return response.status(200).send('Foi..')
}