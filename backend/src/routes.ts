import { Router } from "express";
import ProductController from "./controllers/productController"

const router = Router()

router.get('/product/all', ProductController.findAll)

router.get('/product/:id', ProductController.findById)

router.post('/product/create', ProductController.createById)

router.put('/product/update/:id', ProductController.updateById)

router.delete('/product/delete/all', ProductController.deleteAll)

router.delete('/product/delete/:id', ProductController.deleteById)

router.post('/product/sell/:id', ProductController.sell);

export default router