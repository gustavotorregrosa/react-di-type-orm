export default interface CarData {
    id: string | undefined
    placa: string | undefined
    modelo: string | undefined
    ano: number | undefined
    createdAt?: Date
    updatedAt?: Date
}