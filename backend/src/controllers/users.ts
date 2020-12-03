import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'
import User from '../models/User'
import IUserData from '../interface/IUserData'
import CryptoService from '../services/crypto'


export const login = async (request: Request, response: Response, next: NextFunction) => {

    const email = request.body.email
    const password = request.body.password
    let user: any = null
    try{
        user = await getUser(email)
        if(user && CryptoService.checkPassword(password, user.password)){
            let refreshToken = CryptoService.createHash()
            let refreshTokenValidity = new Date()
            refreshTokenValidity.setHours(refreshTokenValidity.getHours() + 2)

            user = await updateUser({
                ...user,
                refreshToken,
                refreshTokenValidity
            })

            let userData: IUserData = {...user}
            refreshToken = userData.refreshToken!
            delete userData.password
            delete userData.refreshToken
            delete userData.refreshTokenValidity
            delete userData.createdAt
            delete userData.updatedAt

            let jwt = CryptoService.createJWT(userData)

            userData = {
                ...userData,
                refreshToken,
                jwt
            }

            return response.json(userData)
        }

        return response.status(401).send('Not authorized')
        
    }catch(e){
        console.log(e)
    }
}

const getUser = async (email: string) => {
    const repo = getRepository(User)
    let user = await repo.findOne({
        where: {
            email: email
        }
    })

    return user
}

const updateUser = async (data:any) => {
    const repo = getRepository(User)
    let user = await repo.findOne({
        where: {
            id: data.id
        }
    })

    Object.entries(data).forEach(element => {
        user = {
            ...user!,
            [element[0]]: element[1]
        }
    });
    
    await repo.save(user!)
    return user

}
 

export const create = async (request: Request, response: Response, next: NextFunction) => {
    let password = request.body.password
    password = await CryptoService.hash(password)

    let refreshToken = CryptoService.createHash()
    let refreshTokenValidity = new Date()
    refreshTokenValidity.setHours(refreshTokenValidity.getHours() + 2)

    let user = {
        ...request.body,
        password,
        refreshToken,
        refreshTokenValidity
    }

    try{
        const repo = getRepository(User)
        user = await repo.save(user)
    }catch(e){
        return response.status(501).send('User not created')
    }



    let userData: IUserData = {...user}
    delete userData.password
    delete userData.refreshToken
    delete userData.refreshTokenValidity
    delete userData.createdAt
    delete userData.updatedAt

    let jwt = CryptoService.createJWT(userData)
    
    response.status(201).json({
        ...userData,
        jwt,
        refreshToken: user.refreshToken
    })

}



