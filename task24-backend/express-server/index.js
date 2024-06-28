import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/json', (req, res) => {
  res.json({ message: 'Hello, this is a JSON response!' });
});


app.get('/user/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});


app.post('/submit', (req, res) => {
  res.send('Post request received!');
});


app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
