Task #20: Create an E-Commerce Shopping Cart Application Using Redux Toolkit (Frontend Only)
Objective
Develop a frontend-only e-commerce shopping cart application with features like product listing, user authentication (mocked), and cart management using Redux Toolkit for state management. This task will provide experience in handling complex state and managing application logic in a simulated environment without backend integration.

Steps
1. Set Up the React and Redux Environment
Initialize a new React application using Create React App.
Install the necessary packages: @reduxjs/toolkit, react-redux, and react-router-dom.
2. Create the Redux Store
Create a new folder called redux in the src directory.
Set up the Redux store using configureStore from @reduxjs/toolkit.
Combine reducers for authentication, products, and cart.
3. Define Slices for Authentication, Products, and Cart
Create new files in the redux folder:
authSlice.js: Manage authentication state (login, logout, register) using mocked data.
productsSlice.js: Manage product list and product details using mocked data.
cartSlice.js: Manage shopping cart items.
Use createSlice from @reduxjs/toolkit to define actions and reducers for each slice.
Export the actions and reducers from these slices.
4. Provide the Redux Store to the Application
Update App.js to use the Provider component from react-redux to make the Redux store available to the entire application.
Wrap the root component (App) with the Provider component and pass the store as a prop.
5. Create Components for Authentication, Product Listing, Product Details, and Cart
Create a new folder called components in the src directory.
Inside the components folder, create the following files:
Login.js: User login form (mock authentication).
Register.js: User registration form (mock registration).
ProductList.js: Display list of products (use mocked data).
ProductDetail.js: Display detailed view of a single product (use mocked data).
Cart.js: Display items in the shopping cart.
6. Implement React Router
Set up react-router-dom for navigation.
Create routes for login, registration, product listing, product detail, and cart components.
7. Connect Components to Redux and Implement Functionality
Use the useSelector hook to read data from the Redux store in each component.
Use the useDispatch hook to dispatch actions from components where necessary.
Implement user authentication flows (login, register, logout) using mocked data.
Fetch product data from the mock data and display it in the product listing.
Implement functionality to add items to the cart, remove items from the cart, and view the cart.
8. Mock Data
Create a data folder in src to store JSON files or JS objects with mocked data for products and users.
Use this mock data to simulate API responses.
9. Style the Application
Create a CSS file or use a styling library to style the components.
Apply basic styles to make the application visually appealing.
