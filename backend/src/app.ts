import express, { Application, Request, Response, NextFunction } from 'express'
import 'reflect-metadata'
import { createConnection } from "typeorm"
import cors from 'cors'
import bodyParser from 'body-parser'
import {User} from './entity/User'
require('dotenv').config()

createConnection().then(async connection => {

    const app: Application = express()

    app.use(bodyParser.json())
    app.use(cors())

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });


    app.get('/', (req: Request, res: Response, next: NextFunction) => {
        res.send('Thats me' + process.env.texto)
    })

    app.get('/saveuser', (req: Request, res: Response, next: NextFunction) => {
        res.send('Thats me' + process.env.texto)
    })

    app.get('/user', async (req: Request, res: Response, next: NextFunction) => {
        // res.send('Thats me' + process.env.texto)

        console.log("Inserting a new user into the database...");
        const user = new User();
        user.name = "Timber";
        user.email = "timber@gmail.com";
        await connection.manager.save(user);
        console.log("Saved a new user with id: " + user.id);

        console.log("Loading users from the database...");
        const users = await connection.manager.find(User);
        console.log("Loaded users: ", users);

        console.log("Here you can setup and run express/koa/any other framework.");
    })
  
    app.listen(4200, () => console.log('server running'))

}).catch(error => console.log(error));
