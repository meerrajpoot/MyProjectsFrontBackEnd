// src/controllers/postController.js
import Post from '../models/Post.js';

export const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = new Post({
            title,
            content,
            author: req.user.id,
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username email');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author', 'username email');
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        if (post.author.toString() !== req.user.id) return res.status(401).json({ message: 'Unauthorized' });

        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;
        post.updatedAt = Date.now();

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        if (post.author.toString() !== req.user.id) return res.status(401).json({ message: 'Unauthorized' });

        await post.remove();
        res.status(200).json({ message: 'Post removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
