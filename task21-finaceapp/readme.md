Task #21: Create a Personal Finance Tracker Application Using React and Local Storage

Objective

Develop a personal finance tracker application that allows users to track their income, expenses, and savings. The application should use React for the frontend and local storage for data persistence. This task will provide experience in managing state and persisting data in a React application without relying on external backend services.

Steps

Set Up the React Environment

Initialize a new React application using Create React App with vite framwork.
Install necessary packages: react-router-dom and styled-components.
Create Components for Tracking Finance

Create a new folder called components in the src directory.
Inside the components folder, create the following files:
Income.js: Form to add income entries.
Expenses.js: Form to add expense entries.
Savings.js: Form to add savings entries.
Dashboard.js: Display the user’s financial summary.
SignUp.js: User sign-up form (mocked authentication).
Login.js: User login form (mocked authentication).
Set Up Routing

Use react-router-dom to set up routes for different functionalities.
Create routes for SignUp, Login, Dashboard, AddIncome, AddExpense, and AddSavings components.
Implement State Management with React Context

Create a new folder called context in the src directory.
Inside the context folder, create the following files:
AuthContext.js: Manage authentication state (sign-up, login, logout) using mocked data.
FinanceContext.js: Manage state for income, expenses, and savings.
Use the React Context API to provide global state to components.
Implement Local Storage for Data Persistence

In FinanceContext.js, implement functions to save and retrieve data from local storage.
Use useEffect to load data from local storage when the application starts.
Update local storage whenever the state changes (e.g., when adding or removing an income/expense).
Create Authentication Flows

Implement sign-up and login flows in SignUp.js and Login.js using mocked data.
Store authentication status in AuthContext.js and use local storage to persist the authentication state across sessions.
Redirect users to the Login page if they are not authenticated.
Create Forms for Income, Expenses, and Savings

Implement forms in Income.js, Expenses.js, and Savings.js to add new entries.
Use context to manage form data and update the global state.
Validate form inputs to ensure data integrity.
Implement Financial Calculations

In Dashboard.js, calculate total income, total expenses, and total savings from the state.
Display these calculations on the dashboard.
Optionally, show a breakdown of income and expenses in graphical format (e.g., using a chart library).
Style the Application

Create a Css by using tailwindcss withaccordince to vite framwork
Apply basic styles to make the application visually appealing and user-friendly.

my-finance-tracker/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── Expenses.js
│   │   ├── Income.js
│   │   ├── Login.js
│   │   ├── Savings.js
│   │   └── SignUp.js
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── FinanceContext.js
│   ├── routes/
│   │   └── Routes.js
│   ├── index.css
│   ├── main.jsx
│   └── App.js
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
