Task #25: Enhance the Express.js Server with Middleware and Error Handling
Objective: Enhance the existing Express.js server by adding middleware for logging requests, handling errors, and serving static files. This task will help you understand the use of middleware in Express.js and improve the server's functionality and robustness.

Steps:

Setup Project Directory:

Navigate to the existing project directory (e.g., express-server).
Install Necessary Packages:

Install the morgan package for logging HTTP requests by running npm install morgan.
Install the body-parser package for parsing incoming request bodies by running npm install body-parser.
Update the Server:

Open the index.js file in your project directory.
Add Middleware:

Request Logging: Use morgan to log all incoming requests.
Body Parsing: Use body-parser to parse JSON request bodies.
Static Files: Serve static files from a directory named public.
Error Handling:

Add middleware to handle errors. Create a custom error handler that sends a JSON response with the error message and status code.
Enhance Routes:

Ensure the /submit POST route can handle JSON data and respond with the received data.
Add validation to the /user/:name route to ensure the name parameter is provided and is a string.
Test the Enhanced Server:

Start the server and test all the routes again using a web browser or a tool like Postman or Thunder Client.
Test error handling by accessing non-existent routes and sending invalid data to the /submit route.
