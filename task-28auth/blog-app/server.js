
import morgan from 'morgan';
import express from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import profileRoutes from './routes/profile.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(morgan('dev'))


connectDB();


app.use(express.json());
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Bad JSON');
        return res.status(400).json({ error: 'Invalid JSON payload' });
    }
    next();
});

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));




