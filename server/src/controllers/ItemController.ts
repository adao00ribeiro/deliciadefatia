import { Request, Response } from "express";
import { AddItemService } from "../services/Order/AddItemService";

export class ItemController {
    async AddItemHandle(req: Request, res: Response) {
        const { order_id, product_id, amount } = req.body;
        const service = new AddItemService();
        return res.json(await service.execute({ order_id, product_id, amount }));
    }
}