
import express from 'express';
import {
    createOrder,
    getOrders,
    getOrder,
    updateOrder,
    deleteOrder
} from '../controllers/orderController.js';
import validateSchema from '../middleware/validateSchema.js';
import orderSchema from '../schemas/orderSchema.js';

const router = express.Router();

router.post('/orders', validateSchema(orderSchema), createOrder);
router.get('/orders', getOrders);
router.get('/orders/:id', getOrder);
router.put('/orders/:id', validateSchema(orderSchema), updateOrder);
router.delete('/orders/:id', deleteOrder);

export default router;
