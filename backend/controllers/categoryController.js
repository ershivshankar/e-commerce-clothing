const { categories } = require('../data/staticData');

// @desc    Get all categories (with optional gender filter)
// @route   GET /api/categories
const getCategories = async (req, res) => {
    try {
        const { gender } = req.query;
        let result = [...categories];
        if (gender) result = result.filter(c => c.gender === gender);
        res.json(result);
    } catch (error) {
        console.error('getCategories error:', error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getCategories };
