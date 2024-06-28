Task#19: Create a Theme Switcher Application Using React Context API
Objective
Develop a React application that allows users to toggle between light and dark themes using the Context API. This task will help you understand how to manage global state and pass data through the component tree without prop drilling.

Steps
Set Up the React Application

Initialize a new React application using Create React App.
Create the Theme Context

In the src directory, create a new folder called context.
Inside the context folder, create a file named ThemeContext.js.
Create a context with default values for the light theme.
Create the Theme Provider

Inside ThemeContext.js, define a ThemeProvider component that will manage the state for the current theme and provide functions to toggle between themes.
Use the useState hook to manage the current theme state and a function to toggle the theme.
Use the ThemeContext.Provider to pass the current theme and toggle function to child components.
Create Themed Components

Create a new folder called components.
Inside the components folder, create the following files:
Navbar.js
Content.js
Footer.js
Each of these components should consume the ThemeContext to apply the current theme styles.
Implement the Theme Toggle Functionality

In the components folder, create a file named ThemeToggle.js.
Define a functional component that consumes the ThemeContext and renders a button to toggle between light and dark themes.
Create a Parent Component

Create a ThemedApp.js component that uses the ThemeProvider to wrap the entire application.
Ensure that ThemedApp.js renders the Navbar, Content, Footer, and ThemeToggle components.
Add Styling

Create a CSS file for light and dark theme styles.
Apply these styles based on the current theme value in the context.
