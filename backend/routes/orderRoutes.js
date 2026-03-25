const express = require('express');
const router = express.Router();
const prisma = require('../config/db');
const { authenticate } = require('./authRoutes');

// POST /api/orders — place a new order (requires login)
router.post('/', authenticate, async (req, res) => {
    try {
        const { items, total, shippingFee, shipping, paymentMethod } = req.body;

        if (!items || !items.length || !shipping || !paymentMethod) {
            return res.status(400).json({ message: 'Missing order data.' });
        }

        const order = await prisma.order.create({
            data: {
                orderId: `ORD-${Date.now()}`,
                userId: req.userId,
                total: total || 0,
                shippingFee: shippingFee || 0,
                paymentMethod,
                firstName: shipping.firstName,
                lastName: shipping.lastName,
                phone: shipping.phone,
                pincode: shipping.pincode,
                apt: shipping.apt || null,
                street: shipping.street,
                city: shipping.city,
                state: shipping.state,
                items: {
                    create: items.map(item => ({
                        productId: parseInt(item.id, 10) || 0,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity || 1,
                        size: item.size || null,
                        color: item.color || null,
                        image: item.image || '',
                    })),
                },
            },
            include: { items: true },
        });

        res.status(201).json(order);
    } catch (error) {
        console.error('Create order error:', error);
        res.status(500).json({ message: 'Failed to place order.' });
    }
});

// GET /api/orders — get all orders for the logged-in user
router.get('/', authenticate, async (req, res) => {
    try {
        const orders = await prisma.order.findMany({
            where: { userId: req.userId },
            include: { items: true },
            orderBy: { createdAt: 'desc' },
        });
        res.json(orders);
    } catch (error) {
        console.error('Get orders error:', error);
        res.status(500).json({ message: 'Failed to fetch orders.' });
    }
});

// GET /api/orders/:orderId — get a single order by orderId
router.get('/:orderId', authenticate, async (req, res) => {
    try {
        const order = await prisma.order.findUnique({
            where: { orderId: req.params.orderId },
            include: { items: true },
        });
        if (!order || order.userId !== req.userId) {
            return res.status(404).json({ message: 'Order not found.' });
        }
        res.json(order);
    } catch (error) {
        console.error('Get order error:', error);
        res.status(500).json({ message: 'Failed to fetch order.' });
    }
});

module.exports = router;
