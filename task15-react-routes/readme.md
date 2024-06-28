Task#15: Create a Frontend-Only Bookstore Website with React Router v6 Objective: Build a simple bookstore website using the latest version of React Router DOM

Requirements: Components: Create the following functional components: Home: Displays a welcoming message like "Welcome to Our Bookstore!" Books: Shows a list of dummy books. Each book is represented by text. BookDetail: Shows dummy details for a specific book, including a hardcoded title, author, and description. NotFound: Displays a message like "404 Page Not Found" for unmatched routes.

Routing: Implement BrowserRouter as the router. Use Routes and Route from react-router-dom for defining routes. Define the routes as follows: / for Home. /books for Books. /book/:id for BookDetail (use useParam to fetch single book details). A route for NotFound to handle all unmatched URLs.

Navigation: Create a navigation bar for moving between Home and Books. Utilize Link or NavLink from react-router-dom for navigation links.

Dummy Data: Use a static array of book-like objects with properties such as id, title, and author in the Books component. For BookDetail, display details based on the id in the URL parameter.
