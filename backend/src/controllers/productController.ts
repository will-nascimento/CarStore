import { Request, Response } from "express";
import Product from "../model/product";

const ProductController = {

    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const products = await Product.find();
            if (products) return res.status(200).json({ success: true, products });
            return res.status(400).json({ success: false, error: 'error on find products' });

        } catch (error) {
            return res.status(500).json({ success: false, error });
        }
    },

    async findById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const product = await Product.findById(id);
            if (product) return res.status(200).json({ success: true, product });
            return res.status(400).json({ success: false, error: 'error on find product' });

        } catch (error) {
            return res.status(500).json({ success: false, error });
        }
    },

    async createById(req: Request, res: Response): Promise<Response> {
        try {
            const product = await Product.create(req.body);
            if (product) return res.status(201).json({ success: true, product });
            return res.status(400).json({ success: false, error: 'error on create product' });

        } catch (error) {
            return res.status(500).json({ success: false, error });
        }
    },

    async updateById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const product = await Product.findByIdAndUpdate(id, req.body);
            if (product) return res.status(200).json({ success: true, product });
            return res.status(400).json({ success: false, error: 'error on update product' });

        } catch (error) {
            return res.status(500).json({ success: false, error });
        }
    },
    async deleteAll(req: Request, res: Response): Promise<Response> {
        try {
            const products = await Product.deleteMany();
            if (products) return res.status(200).json({ success: true, products });
            return res.status(400).json({ success: false, error: 'error on delete products' });

        } catch (error) {
            return res.status(500).json({ success: false, error });
        }
    },
    async deleteById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        try {
            const product = await Product.findByIdAndDelete(id, req.body);
            if (product) return res.status(200).json({ success: true, product });
            return res.status(400).json({ success: false, error: 'error on delete product' });

        } catch (error) {
            return res.status(500).json({ success: false, error });
        }
    },

    async sell(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;
        const { quantity } = req.body;

        try {
            const product = await Product.findById(id);
            if (product) {
                if((product?.quantity|| 0)>= quantity) {
                   const productSell = await Product.findByIdAndUpdate(id, { quantity:(product?.quantity || 0) - quantity });
                    return res.status(200).json({ success: true, product: productSell, message: 'Sell succeeded' });
                }
                return res.status(200).json({ success: false, product, message: 'Sell failed' });
            }
            return res.status(400).json({ success: false, error: 'error on find product' });

        } catch (error) {
            return res.status(500).json({ success: false, error });
        }
    },
}

export default ProductController
