// src/controllers/profileController.js
import User from '../models/User.js';
import Post from '../models/Post.js';
import Comment from '../models/Comment.js';

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        const posts = await Post.find({ author: req.user.id });
        const comments = await Comment.find({ author: req.user.id });

        res.status(200).json({
            user,
            posts,
            comments
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
