// src/controllers/commentController.js
import Comment from '../models/Comment.js';

export const postComment = async (req, res) => {
    try {
        const { content, blogPost } = req.body;
        const newComment = new Comment({
            content,
            author: req.user.id,
            blogPost,
        });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ blogPost: req.params.postId }).sort({ createdAt: -1 });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const editComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });
        if (comment.author.toString() !== req.user.id) return res.status(401).json({ message: 'Unauthorized' });

        comment.content = req.body.content || comment.content;
        comment.updatedAt = Date.now();

        await comment.save();
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        if (!comment) return res.status(404).json({ message: 'Comment not found' });
        if (comment.author.toString() !== req.user.id) return res.status(401).json({ message: 'Unauthorized' });

        await comment.remove();
        res.status(200).json({ message: 'Comment removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
