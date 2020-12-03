import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import User from '../models/User'
import IUserData from '../interface/IUserData'
import jwt from 'jsonwebtoken'

class CryptoService {

    static checkPassword = (challenge: string, password: string): boolean => bcrypt.compareSync(challenge, password)

    static hash = async (password: string) : Promise<string> => {
        const hashedPassword = await bcrypt.hash(password, 12)
        return hashedPassword
    }

    static createHash = () => crypto.createHash('sha1').update(
        (new Date()).valueOf().toString() + Math.random().toString()
    ).digest('hex')


    static createJWT = (user: IUserData) => {
        let secret: any = process.env.JWT_KEY
        let token = jwt.sign({...user}, secret)
        return token
    }
}

export default CryptoService