import request from 'supertest';
import app from '../src/index.js';
import mongoose from 'mongoose';
import User from '../src/models/User.js';
import Post from '../src/models/Post.js';
import Comment from '../src/models/Comment.js';

describe('API Tests', () => {
    let token;
    let postId;
    let commentId;

    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/blogDB-test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });

        // Register a user
        const user = await User.create({
            username: 'testuser',
            email: 'test@example.com',
            password: 'password',
        });

        // Login and get token
        const loginResponse = await request(app)
            .post('/users/login')
            .send({ email: 'test@example.com', password: 'password' });

        token = loginResponse.body.token;

        // Create a post
        const postResponse = await request(app)
            .post('/posts')
            .set('Authorization', `Bearer ${token}`)
            .send({ title: 'Test Post', content: 'Test content', author: user.id });

        postId = postResponse.body._id;
    });

    afterAll(async () => {
        await User.deleteMany({});
        await Post.deleteMany({});
        await Comment.deleteMany({});
        await mongoose.connection.close();
    });

    it('should create a comment', async () => {
        const res = await request(app)
            .post(`/posts/${postId}/comments`)
            .set('Authorization', `Bearer ${token}`)
            .send({ content: 'Test comment', blogPost: postId });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.content).toBe('Test comment');

        commentId = res.body._id;
    });

    it('should get all comments for a post', async () => {
        const res = await request(app)
            .get(`/posts/${postId}/comments`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('should edit a comment', async () => {
        const res = await request(app)
            .put(`/posts/${postId}/comments/${commentId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({ content: 'Updated comment' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('content', 'Updated comment');
    });

    it('should delete a comment', async () => {
        const res = await request(app)
            .delete(`/posts/${postId}/comments/${commentId}`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Comment removed');
    });

    it('should get all posts', async () => {
        const res = await request(app)
            .get('/posts')
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('should get a single post', async () => {
        const res = await request(app)
            .get(`/posts/${postId}`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id', postId);
    });

    it('should update a post', async () => {
        const res = await request(app)
            .put(`/posts/${postId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({ title: 'Updated Post Title', content: 'Updated Post Content' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('title', 'Updated Post Title');
    });

    it('should delete a post', async () => {
        const res = await request(app)
            .delete(`/posts/${postId}`)
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Post removed');
    });

    it('should get profile data', async () => {
        const res = await request(app)
            .get('/profile')
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('user');
        expect(res.body).toHaveProperty('posts');
        expect(res.body).toHaveProperty('comments');
    });
});
