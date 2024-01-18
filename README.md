# React Customers Management Application

### Overview
This React application is designed for managing customer data. It includes features such as rendering a customer table, searching for customers, filtering by plan, exporting data to CSV, and adding new customers. The application is built using React and Redux for state management.
This project involves developing a React application for managing customer data. The provided HTML page includes a customer table, and a sample JSON file contains customer data.

### Customer Data
The sample customer data is provided in a JSON file (customers.json). This file is initially loaded from the server when the application starts. When a new customer is added, it is stored in Redux state and sent to the server via an HTTP request, updating the JSON data.

### Server Setup
Ensure that the JSON file containing customer data is hosted on the server. The initial loading of the application fetches this data. The server should handle POST requests to update customer data when a new customer is added.

## Features
1. React Component for Customer Table
A React component renders the customer table based on the provided HTML page.
 It loads customer data from the sample JSON file.

3. Search Field
The application includes a search field allowing users to dynamically search for customers by name or phone number.
 The table updates in real-time as the user types.

5. Filtering by Plan
Users can filter customers based on their plan.
 A dropdown option allows selection, and the table updates accordingly.

7. Export to CSV
A button is provided to export the current table data to a CSV file.
 Users can download the customer table in CSV format.

9. Add New Customer
A form enables users to add new customers to the table.
 Fields include first name, last name, phone number, email, and plan. Upon submission, the new customer is added to both Redux state and the server's JSON data.

#### Getting Started:
Clone the repository.
Run npm install to install dependencies.
Run npm start to start the development server.
