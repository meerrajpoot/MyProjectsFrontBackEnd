
import Order from '../models/Order.js';
import Product from '../models/Product.js';

export const createOrder = async (req, res) => {
    try {
        const { user, products } = req.body;

        
        let totalAmount = 0;
        for (let item of products) {
            const product = await Product.findById(item.product);
            if (!product) {
                return res.status(404).send({ message: 'Product not found' });
            }
            totalAmount += product.price * item.quantity;
        }

        const order = new Order({
            user,
            products,
            totalAmount
        });

        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('user')
            .populate('products.product');
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('user')
            .populate('products.product');
        if (!order) {
            return res.status(404).send();
        }
        res.status(200).send(order);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateOrder = async (req, res) => {
    try {
        const { user, products } = req.body;

        // Calculate total amount
        let totalAmount = 0;
        for (let item of products) {
            const product = await Product.findById(item.product);
            if (!product) {
                return res.status(404).send({ message: 'Product not found' });
            }
            totalAmount += product.price * item.quantity;
        }

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { user, products, totalAmount },
            { new: true, runValidators: true }
        );

        if (!order) {
            return res.status(404).send();
        }

        res.status(200).send(order);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) {
            return res.status(404).send();
        }
        res.status(200).send(order);
    } catch (error) {
        res.status(500).send(error);
    }
};
