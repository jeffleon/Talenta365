# Talenta365


### pre-requisite
Before starting, it is important to consider the following programs in order to execute the project
  - Git
  - Node
  - Mysql
you have to create a database with name 'talenta' with mysql then you need to create a .env file and add your credentials user and pasword of your mysql user

## API rest
Api rest for Manage Library page this page run in port 5000

## React app
Library page run in port 3000 and begin with endpoint '/Library'

# API rest endpoints allowed
    - GET /api/users
    - GET /api/users/:id
    - POST /api/users/
    - DELETE /api/users/:id
    - PATCH /api/users/:id
    - GET /api/books
    - GET /api/books/:id
    - POST /api/books/
    - DELETE /api/books/:id
    - PATCH /api/books/:id
    - GET /api/books/user/:id

# start 🚀
To be able to run the application and use it in a local development environment you can follow
the following steps:

Clone the repository to have the local project and go inside of them
```
git clone https://github.com/jeffleon/Talenta365.git
cd Talenta365
```
Before to start you need to install the dependecies
go inside two folders and install dependencies and run npm install
```
cd Library
npm install
```
that was the dependencies about the API 
do the same in the front-end aplication
```
cd ..
cd Front-Library
npm install
``` 
# run aplications
    - for API
        - go inside the folder as mention in before steps 
        - then run "npm start"
    - React app
        - go inside the folder as mention in before steps 
        - then run "yarn start"
### Built with 🛠️
The core language used to develop the application is
- Node.js - 12.16.1

The libraries that will be used to develop the application are:
- yamljs
- react-redux-forms
- Semantic-UI
- mysql

Frameworks:
- Express
- React


### authors 🗒
- Jefferson Alexander Leon Back-end


