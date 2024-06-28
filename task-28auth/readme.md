Task #28: Implement Authentication and Authorization for the Blog Application Objective Enhance your existing blog application by adding authentication and authorization features using JWT (JSON Web Tokens).

Requirements Set Up Authentication:

Install necessary dependencies (jsonwebtoken, bcryptjs, express-validator). Create a User model with fields for username, email, and password. Implement user registration and login endpoints. User Registration:

Endpoint: POST /register Validate user input (e.g., username, email, password). Hash the password before saving it to the database. Save the user data to the MongoDB database. Respond with a success message or appropriate error messages. User Login:

Endpoint: POST /login Validate user input. Check if the user exists and the password is correct. Generate a JWT token upon successful authentication. Respond with the JWT token and user information. Protected Routes:

Implement middleware to protect routes that require authentication. Use JWT to verify the token and extract user information. Apply this middleware to routes such as creating, updating, and deleting blog posts. Authorization:

Extend your middleware to check user roles if necessary. Implement role-based access control for certain actions (e.g., only admin users can delete posts). Profile Management:

Endpoint: GET /profile Retrieve and return the logged-in user's profile information. Endpoint: PUT /profile Update the logged-in user's profile information (e.g., username, email, password). Testing:

Test authentication and protected routes using tools like Postman or Insomnia. Ensure tokens are correctly issued, verified, and invalidated.