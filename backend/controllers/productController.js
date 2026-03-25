const { products } = require('../data/staticData');

// @desc    Get all products (with optional filters)
// @route   GET /api/products
const getProducts = async (req, res) => {
    try {
        const { category, gender, occasion, season } = req.query;
        let result = [...products];

        if (category) result = result.filter(p => p.category === category);
        if (gender) result = result.filter(p => p.gender === gender);
        if (occasion) result = result.filter(p => p.occasion === occasion);
        if (season) result = result.filter(p => p.season === season);

        res.json(result);
    } catch (error) {
        console.error('getProducts error:', error);
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single product
// @route   GET /api/products/:id
const getProductById = async (req, res) => {
    try {
        const product = products.find(p => p.id === parseInt(req.params.id));
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('getProductById error:', error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getProducts, getProductById };
