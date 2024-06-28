Task #29: Implement Commenting System for the Blog Application (Backend Only)

Objective:
Enhance your blog application by adding a backend system for managing comments, allowing users to post, view, edit, and delete comments on blog posts.

Requirements:

Set Up Comments Model:

Create a Comment model with fields for the content of the comment, author (user reference), blog post reference, and timestamps.
Posting Comments:

Endpoint: POST /posts/
/comments
Validate user input (e.g., comment content).
Verify that the user is authenticated.
Create and save the comment to the database associated with the blog post and user.
Respond with the created comment or appropriate error messages.
Viewing Comments:

Endpoint: GET /posts/
/comments
Retrieve and return all comments for a specific blog post.
Ensure that comments are sorted by timestamp (e.g., most recent first).
Editing Comments:

Endpoint: PUT /posts/
/comments/
Validate user input (e.g., updated comment content).
Verify that the user is authenticated and is the author of the comment.
Update the comment content in the database.
Respond with the updated comment or appropriate error messages.
Deleting Comments:

Endpoint: DELETE /posts/
/comments/
Verify that the user is authenticated and is the author of the comment.
Remove the comment from the database.
Respond with a success message or appropriate error messages.
Middleware for Authorization:

Implement middleware to verify user authentication for comment-related actions.
Extend middleware to ensure only the comment author can edit or delete their comments.
Profile Integration:

Update the GET /profile endpoint to include the user's comments.
Ensure that the profile information includes both the blog posts created and comments made by the user.
Testing:

Test all comment-related endpoints using tools like Postman or Insomnia.
Ensure that comments can be posted, viewed, edited, and deleted as expected.
Test authentication and authorization for comment actions.
