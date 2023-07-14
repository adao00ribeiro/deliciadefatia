import { Request , Response } from "express";
import { ListCategoryService } from "../services/Category/ListCategoryService";
import { CreateCategoryService } from "../services/Category/CreateCategoryService";

export class CategoryController{

    async CreateHandle(req:Request , res:Response){
        const name = req.body.name;
        const service = new CreateCategoryService();

        const category = service.execute(name);

        return res.json(category)
    }

    async ListHandle(req:Request , res:Response){
        const name = req.body.name;
        const service = new ListCategoryService();

        const category = service.execute();

        return res.json(category)
    }




}