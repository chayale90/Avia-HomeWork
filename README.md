# React Customer Management Application

## Overview

This React application is designed for managing customer data. It includes features such as rendering a customer table, searching for customers, filtering by plan, exporting data to CSV, adding new customers, a "Nagishli" button for visually impaired users, global Redux store, and dark mode support. The application is built using React and Redux for state management.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/chayale90/Avia-HomeWork.git


2. **Install dependencies::**

   ```bash
    npm install

3. **Start the development server:**

   ```bash
    npm start

The application will be accessible at http://localhost:3000 in your web browser.

## Customer Data
The sample customer data is provided in a JSON file (customers.json).
This file is initially loaded from the server when the application starts.
When a new customer is added, it is stored in the global Redux state and sent to the server via an HTTP request, updating the JSON data.

## Server Setup
Ensure that the JSON file containing customer data is hosted on the server. The initial loading of the application fetches this data. The server should handle POST requests to update customer data when a new customer is added.

## Features
### 1. React Component for Customer Table
A React component renders the customer table based on the provided HTML page. It loads customer data from the sample JSON file.

### 2. Search Field
The application includes a search field allowing users to dynamically search for customers by name or phone number.
The table updates in real-time as the user types.

### 3. Filtering by Plan
Users can filter customers based on their plan.
A dropdown option allows selection, and the table updates accordingly.

### 4. Export to CSV
A button is provided to export the current table data to a CSV file. Users can download the customer table in CSV format.

### 5. Add New Customer
A form enables users to add new customers to the table. Fields include first name, last name, phone number, email, and plan. Upon submission, the new customer is added to both the global Redux state and the server's JSON data.

###  6. "Nagishli" Button
For visually impaired users, a "Nagishli" button is available, enhancing accessibility.
This feature provides additional support for users with visual difficulties.

###  7. Global Redux Store
Utilizing a global Redux store, the application ensures a unified and efficient state management system for streamlined handling of customer data across various components.

### 8. Dark Mode
Enhance your viewing experience by enabling dark mode, particularly useful in low-light environments. The application offers a dedicated dark mode feature, contributing to improved usability and reduced eye strain during extended usage.

## Responsive Design
The application is designed to be responsive, providing an optimal user experience on smartphones.
Access and manage customer data seamlessly on your mobile device, ensuring a consistent and user-friendly interface regardless of the screen size.
Enjoy the full functionality of the application while on the go.

