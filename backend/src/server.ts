import app from './app'
import 'reflect-metadata'
import './database'

app.listen(4200, () => {
    console.log('running service')
})