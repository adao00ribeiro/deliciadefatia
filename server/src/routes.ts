import { Router, Request, Response } from 'express'
import multer from 'multer'
import { AuthController } from './controllers/AuthController';
import { CategoryController } from './controllers/CategoryController';
import { UserController } from './controllers/UserController';
import { ProductController } from './controllers/ProductController';
import { IsAuthenticated } from './middlewares/IsAuthenticated';
import  uploadConfig  from "./config/multer";
import { OrderController } from './controllers/OrderController';



export const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))
//-- ROTAS USER --
router.post('/users', new UserController().CreateHandle)

router.post('/session', new AuthController().handle)

router.get('/me', IsAuthenticated,  new UserController().DetailHandle)

//-- ROTAS CATEGORY
router.post('/category', IsAuthenticated, new CategoryController().CreateHandle )

router.get('/category', IsAuthenticated, new CategoryController().ListHandle )

//-- ROTAS PRODUCT
router.post('/product', IsAuthenticated, upload.single('file'), new ProductController().CreateHandle )

router.get('/category/product', IsAuthenticated, new CategoryController().ListHandle )

//-- ROTAS ORDER
router.post('/order', IsAuthenticated, new OrderController().CreateHandle )
router.delete('/order', IsAuthenticated, new OrderController().RemoveHandle )

router.post('/order/add', IsAuthenticated, new OrderController().CreateHandle )
router.delete('/order/remove', IsAuthenticated, new OrderController().RemoveHandle )

router.put('/order/send', IsAuthenticated, new OrderController().SendHandle )

router.get('/orders', IsAuthenticated, new OrderController().ListHandle )
router.get('/order/detail', IsAuthenticated, new OrderController().DetailHandle )

router.put('/order/finish', IsAuthenticated, new OrderController().FinishHandle )

