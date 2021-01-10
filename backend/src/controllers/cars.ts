import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'
import ICarData from '../interface/ICarData'
import Car from '../models/Car'

export const save = async (request: Request, response: Response, next: NextFunction) => {
    const repo = getRepository(Car)
    const carData: ICarData = {
        ...request.body
    }

    let car: Car = carData.id ? await repo.findOne(carData.id) as Car : new Car()

    delete carData.id

    Object.entries(carData).forEach(element => {
        car = {
            ...car!,
            [element[0]]: element[1]
        }
    });

    car = await repo.save(car)

    console.log(car)

    response.send({
        ...car
    })



}