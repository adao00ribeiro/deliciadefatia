import {Request,Response} from 'express'
import { CreateProductService } from '../services/Product/CreateProductService'
import { LIstProductService } from '../services/Product/ListProductService';



export class ProductController{
    
   
    async CreateHandle(req:Request,res:Response){
        const {name , price , description,category_id} = req.body;
        const service = new CreateProductService();
        if(!req.file){
            throw new Error("Error upload file")
        }

        const {originalname , filename:banner} = req.file;

        const product = await service.execute({
            category_id, 
            name , 
            price , 
            description, 
            banner
        });
        return res.json(product);
    }
    async ListProductHandle(req:Request,res:Response) {
               
        const service = new LIstProductService();
        const product = await service.execute();
        return res.json(product);
    }
   async ListProductByCategoryHandle(req:Request , res:Response) {
        throw new Error('Method not implemented.');
    }
}