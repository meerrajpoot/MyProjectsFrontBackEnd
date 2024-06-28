Task #24: Create a Basic Express.js Server
Objective:
Set up a basic Express.js server that handles a few routes and sends appropriate responses. This will help you understand how to create a server, define routes, and handle HTTP requests and responses.

Steps:
Setup Project Directory:

Create a new directory for the project (e.g., express-server).
Initialize a new Node.js project by running npm init -y.
Install Express:

Install Express.js by running npm install express.
Create the Server:

In the project directory, create a new file named index.js.
Set up a basic Express.js server in index.js that listens on port 3000 and responds with "Hello World!" when accessing the root URL (/).
Define Routes:

Add a route to return a JSON response at /json.
Add a route with a URL parameter to greet a user by name at /user/:name.
Add a route to handle POST requests at /submit.
Test the Server:

Start the server and test all the defined routes using a web browser or a tool like Postman or thunder client to ensure they are working correctly.
