# RealtyHub

RealtyHub is a real estate web application built using React.js, Node.js, Express.js, and MySQL. It demonstrates full-stack development, REST API integration, database management, and CRUD operations.

## Features

- User registration and login
- Property listings
- User management
- CRUD operations for user records
- REST API integration
- MySQL database integration using Sequelize ORM
- React-based frontend

## Tech Stack

- Frontend: React.js, JavaScript, HTML, CSS, Vite
- Backend: Node.js, Express.js
- Database: MySQL
- ORM: Sequelize
- Development Tools: VS Code, Git, GitHub, XAMPP

## Project Structure

    Ryco/
    ├── app.js
    ├── db.js
    ├── user.js
    ├── property.js
    ├── package.json
    └── ryco/
        ├── index.html
        ├── package.json
        ├── vite.config.js
        └── src/
            ├── App.jsx
            ├── App.css
            ├── index.css
            ├── Home.jsx
            ├── About.jsx
            ├── Properties.jsx
            ├── PropertyCard.jsx
            ├── Account.jsx
            ├── Admin.jsx
            └── main.jsx

## Prerequisites

- Node.js and npm
- MySQL
- XAMPP
- Git

## Installation and Setup

### 1. Clone the repository

    git clone <YOUR_GITHUB_REPOSITORY_URL>
    cd Ryco

### 2. Configure the database

1. Start MySQL using XAMPP.
2. Open phpMyAdmin.
3. Create a database named `ryco`.
4. Update the database connection settings in `db.js` if required.

### 3. Install backend dependencies

From the project root directory, run:

    npm install

### 4. Start the backend server

    node app.js

The backend runs at `http://localhost:3000`.

### 5. Install frontend dependencies

Open a new terminal and navigate to the frontend directory:

    cd ryco
    npm install

### 6. Start the frontend

    npm run dev

Open the local URL displayed in the terminal to access the application.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Check server status |
| POST | `/register` | Register a user |
| POST | `/login` | Authenticate a user |
| GET | `/users` | Retrieve all users |
| GET | `/user/:id` | Retrieve a user by ID |
| PUT | `/user/:id` | Update user information |
| DELETE | `/user/:id` | Delete a user |

## Future Improvements

- Property management and filtering
- Property image uploads
- Secure authentication and password hashing
- Role-based access control
- Improved input validation
- Cloud deployment

## Author

Ryan Fernandes

GitHub: [ryanferns-ryn](https://github.com/ryanferns-ryn)
