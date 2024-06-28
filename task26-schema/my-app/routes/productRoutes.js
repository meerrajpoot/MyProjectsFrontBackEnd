// products
import express from 'express';
import {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';
import validateSchema from '../middleware/validateSchema.js';
import productSchema from '../schemas/productSchema.js';

const router = express.Router();

router.post('/products', validateSchema(productSchema), createProduct);
router.get('/products', getProducts);
router.get('/products/:id', getProduct);
router.put('/products/:id', validateSchema(productSchema), updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
