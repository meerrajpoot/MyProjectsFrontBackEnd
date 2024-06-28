import express from 'express';
import connectDB from './src/config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import userRoutes from './src/routes/userRoutes.js';
import postRoutes from './src/routes/postRoutes.js';
import commentRoutes from './src/routes/commentRoutes.js';
import profileRoutes from './src/routes/profileRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(morgan('dev'))
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/posts', commentRoutes);
app.use('/profile', profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
