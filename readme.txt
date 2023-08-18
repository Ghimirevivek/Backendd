Backend API README:-
This README provides an overview of the backend API for the "snSilos" application, including instructions on how to set it up and test its endpoints.

Introduction
The backend API is built using Node.js and Express.js, along with MongoDB for data storage. It provides endpoints to manage user data for the "snSilos" application. The API allows you to retrieve a list of users, fetch details of a specific user, add new users, delete users, and update user information.


Setup
1. Clone the repository containing the backend API code.
2. Make sure you have Node.js and MongoDB installed on your system.
3. Open a terminal and navigate to the project directory.
4. Install dependencies by running the following command: npm install
5.Start the server by running: npm start
6. The server will start on port 4000.

Endpoints
GET /allusers
Fetches a list of all users in the database.

GET /oneProduct/:id
Fetches details of a specific user based on the provided user ID.

POST /adduser
Adds a new user to the database.

DELETE /admin/:id
Deletes a user from the database based on the provided user ID.

PATCH /admin/:id
Updates user information based on the provided user ID.

Data Model
The data model for a user is defined as follows:

title: String
price: Number
description: String
image: String
rating: Number
category: String
qty: Number
This model represents a product's details within the "snSilos" application.