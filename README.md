Welcome to Beautiful Homes App!

This is a web application built with React and Node.js that allows users to view, add, update, and delete homes for sale.

Features
View a list of homes with images, titles, and basic details to enable you shop around for a beautiful home or property.
Filter homes by category (e.g. single-family, townhome, condo)
Search for homes by title or description
Love homes and see the number of loves they receive
Add a new home for sale/rent
Update an existing home details and images
Delete a home from the list

Installation
Clone the repository: git clone https://github.com/Kat-Kimani/real-estate-react-project
Install dependencies: cd real-estate-react-project && npm install
Start the server: npm start
Open the application in your web browser at http://localhost:3000

Dependencies
React
Node.js
Express
MongoDB

Components
App
This is the main component of the application. It renders the Header, NavBar, HomesList, and HomesForm components. It also manages the state of the homes array, category filter, and handles updates and additions to the homes array.

HomesItem
This component renders a single home item in the HomesList component. It displays the home's details and allows the user to add comments, like the home, and update or delete the home.

HomesList
This component renders all Homes in the App component. It displays the home's details and allows the user to add comments, like the home, and update or delete the home.

HomesForm gives a form that enables a user to add a new home to the web application.

HomesUpdateForm gives a form to enable update the details of each form

NavBar
This component renders the For Sale , For Rent and Search Buttons. These buttons enable the user to filter the homes according to category required on clicking them.

onCategoryClick
This function is passed down to the NavBar component as a prop. It is called when a category filter button is clicked, and updates the category state in the App component to filter the homes displayed in the HomesList.

handleSearch
This function is also passed down to the NavBar component as a prop. It is called when a search query is submitted, and filters the homes in the homes array based on the search query. The filtered homes are then passed to the HomesList component to be displayed.

filteredHomes
This is a computed value based on the homes array and the category state. It filters the homes array based on the category filter and returns the filtered homes.

handleAddHome
This function is passed down to the HomesForm component as a prop. It is called when the user submits the form to add a new home. It adds the new home to the homes array in the App component.

handleLoveClick
This function is called when the user clicks on the heart icon to like a home. It updates the isLoved and loveCount states in the HomesItem component.

handleSubmit
This function is called when the user submits a comment for a home. It extracts the comment from the form data and sets it as the comment state in the HomesItem component.

handleUpdateClick
This function is called when the user clicks the "Update" button for a home. It sets the showUpdateForm state to true, which displays the HomesUpdateForm component.

handleDeleteClick
This function is called when the user clicks the "Delete" button for a home. It sends a DELETE request to the server to delete the home from the database, and removes the home from the homes array in the App component.

Contributing
Contributions are welcome! If you find a bug or have a suggestion for a new feature, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
