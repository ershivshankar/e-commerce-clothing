const { reviews: staticReviews } = require('../data/staticData');

// In-memory reviews array (starts with static data, new reviews are added here)
let reviews = [...staticReviews];

// @desc    Get latest reviews
// @route   GET /api/reviews
const getReviews = async (req, res) => {
    try {
        const sorted = [...reviews].sort((a, b) => b.id - a.id);
        res.json(sorted.slice(0, 10));
    } catch (error) {
        console.error('getReviews error:', error);
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a review
// @route   POST /api/reviews
const createReview = async (req, res) => {
    try {
        const { name, rating, comment, image } = req.body;
        const newReview = {
            id: reviews.length + 1,
            name,
            rating,
            comment,
            image: image || null,
            createdAt: new Date().toISOString(),
        };
        reviews.push(newReview);
        res.status(201).json(newReview);
    } catch (error) {
        console.error('createReview error:', error);
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getReviews, createReview };
