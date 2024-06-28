Task#18: Build a Simple Profile Card Application
Objective
Create a React application that displays profile cards for different users. Each card should display the user's name, age, and a short bio. This task will help you understand how to pass data to components using props.

Steps
Set Up the React Application

Initialize a new React application using Create React App.
Create the ProfileCard Component

In the src directory, create a new folder called components.
Inside the components folder, create a file named ProfileCard.js.
Define a functional component that will take props and render a profile card.
Define and Pass Props

The ProfileCard component should accept the following props: name, age, and bio.
Use these props to display the information within the component.
Create a Parent Component

Create a ProfilesList component that will render multiple ProfileCard components.
Define an array of objects, each representing a user's profile with name, age, and bio attributes.
Map over this array to create multiple ProfileCard components, passing the appropriate props to each.
Add Styling

Create a CSS file to style the profile cards and make the application visually appealing.
Render the Parent Component

Ensure that the ProfilesList component is rendered in the App component.
Deliverables
A working React application displaying multiple profile cards.
Proper use of props to pass data from the parent component to the ProfileCard component.
Basic styling applied to make the profile cards visually appealing.
