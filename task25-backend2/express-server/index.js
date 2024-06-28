import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';




const app = express();
const port = 3000;

// Helper to get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware for logging requests
app.use(morgan('dev'));

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Route to return a JSON response
app.get('/json', (req, res) => {
    res.json({ message: 'Hello, JSON!' });
});

// Route to greet a user by name
app.get('/user/:name', (req, res, next) => {
    const name = req.params.name;

    // Check if the name contains only alphabetic characters
    if (!/^[a-zA-Z]+$/.test(name)) {
        const err = new Error('Name parameter must be a valid string without numbers');
        err.status = 400;
        return next(err);
    }

    res.send(`Hello, ${name}!`);
});


// Route to handle POST requests to /submit
app.post('/submit', (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received successfully',
        data: data
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).json({
        error: {
            message: 'Not Found'
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
