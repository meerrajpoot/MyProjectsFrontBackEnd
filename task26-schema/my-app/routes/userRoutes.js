
import express from 'express';
import {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
} from '../controllers/userController.js';
import validateSchema from '../middleware/validateSchema.js';
import userSchema from '../schemas/userSchema.js';

const router = express.Router();

router.post('/users', validateSchema(userSchema), createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', validateSchema(userSchema), updateUser);
router.delete('/users/:id', deleteUser);

export default router;
