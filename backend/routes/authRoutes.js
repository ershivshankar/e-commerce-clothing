const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../config/db');

const JWT_SECRET = process.env.JWT_SECRET || 'aaradhiya-secret-change-in-production';

// Middleware to verify JWT token
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Not authenticated.' });
    }
    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch {
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }
};

// POST /api/auth/signup
router.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Check if user already exists in database
        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) {
            return res.status(409).json({ message: 'An account with this email already exists.' });
        }

        // Hash password and create user in Neon DB
        const passwordHash = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { firstName, lastName, email, passwordHash },
        });

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({
            token,
            user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email },
        });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Something went wrong. Please try again.' });
    }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // Find user in database
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Verify password
        const valid = await bcrypt.compare(password, user.passwordHash);
        if (!valid) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
        res.json({
            token,
            user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email },
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Something went wrong. Please try again.' });
    }
});

// GET /api/auth/me — get current user profile
router.get('/me', authenticate, async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.userId },
            select: { id: true, firstName: true, lastName: true, email: true, createdAt: true },
        });
        if (!user) return res.status(404).json({ message: 'User not found.' });
        res.json(user);
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ message: 'Something went wrong.' });
    }
});

module.exports = router;
module.exports.authenticate = authenticate;
