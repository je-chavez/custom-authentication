# Description
This is a custom token-based authentication micro service that handles registering and logging in using JSON web tokens. Uses an express server to host the endpoints, and MongoDB for creating and storing user information.

# What I Learned
In order to make this micro-service I needed to learn the following:
  * Docker
  * Node.js
  * Express.js
  * MongoDB
  * Mongoose
  * JSON Web Tokens

# Instructions
This project uses Node.js and MongoDB. 

To setup MongoDB (steps using Docker): 
  * Open terminal and run **docker pull mongo:4.0.4**
  * Run **docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4**

To run the Node project, complete the following:
  * Run **npm install**
  * Run **node app**
  
