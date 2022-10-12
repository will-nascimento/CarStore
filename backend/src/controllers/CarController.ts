import { Request, Response } from "express";
import CarModel from "../database/carModel";

const CarController = {

    async index(req: Request, res: Response): Promise<Response> {
        res.header("Access-Control-Allow-Origin", "*")
        let cars = await CarModel.find()
        return res.json(cars)
    },

    async findById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        let car = await CarModel.findById(id)
        return res.json(car)
    },

    async create(req: Request, res: Response): Promise<Response> {
        console.log(req.body)
        return res.json('ok')
    },

    async update(req: Request, res: Response): Promise<Response> {
        const {id} = req.params
        let car = await CarModel.findByIdAndUpdate(id,req.body)
        return res.json(car)
    },

    async delete(req: Request, res: Response): Promise<Response> {
        const {id} = req.params
        let car = await CarModel.findByIdAndDelete(id,req.body)
        return res.json(car)
    },

}

export default CarController
