import express from 'express';
import { postComment, getComments, editComment, deleteComment } from '../controllers/commentController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/:postId/comments', authMiddleware, postComment);
router.get('/:postId/comments', getComments);
router.put('/:postId/comments/:commentId', authMiddleware, editComment);
router.delete('/:postId/comments/:commentId', authMiddleware, deleteComment);

export default router;
