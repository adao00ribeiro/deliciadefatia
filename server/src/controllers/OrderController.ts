import { Request, Response } from "express";
import { CreateOrderService } from "../services/Order/CreateOrderService";
import { RemoveOrderService } from "../services/Order/RemoveOrderService";

export class OrderController {
   
    async CreateHandle(req: Request, res: Response) {
        const { table, name } = req.body;
        const service = new CreateOrderService();
        return await service.execute({ table, name });
    }
    async RemoveHandle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;
        const service = new RemoveOrderService();
        return res.json(await service.execute(order_id));
    }
   
    DetailHandle(req: Request, res: Response) {
       
    }
    ListHandle(req: Request, res: Response) {
        
    }
    SendHandle(req: Request, res: Response) {
        
    }
    FinishHandle(req: Request, res: Response) {
        
    }
}