import express, {Application, Request, Response, NextFunction} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
require('dotenv').config()

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

app.listen(4200, () => console.log('server running'))