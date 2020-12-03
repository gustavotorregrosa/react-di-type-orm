export default interface UserData {
    id: string | undefined
    password: string | undefined
    name: string
    email: string
    refreshToken?: string
    refreshTokenValidity?: Date
    createdAt?: Date
    updatedAt?: Date
    jwt?: string

}