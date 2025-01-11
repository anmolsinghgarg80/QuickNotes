# QuickNotes

A full-stack note-taking application built with React, Node.js, and MongoDB that allows users to create, organize, and manage their notes with tags.

## Features

- 🔐 Secure user authentication
- 📝 Create, edit, and delete notes
- 🏷️ Tag-based organization
- 🔍 Search functionality
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
## Tech Stack

### Frontend

- React.js
- Tailwind CSS
- Axios for API calls
- React Modal
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Cookie-based sessions

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/anmolsinghgarg80/QuickNotes.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd QuickNotes
   ```

3. **Install dependencies**:

   - For the backend:

     ```bash
     cd backend
     npm install
     ```

   - For the frontend:

     ```bash
     cd ../frontend/notes-app
     npm install
     ```

## Configuration

1. **Backend**:

   Create a `.env` file in the `backend` directory with the following variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

2. **Frontend**:

   Create a `.env` file in the `frontend/notes-app` directory with the following variable:

   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

## Running the Application

1. **Start the backend server**:

   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server**:

   ```bash
   cd ../frontend/notes-app
   npm run dev
   ```

The application should now be running, with the frontend accessible at `http://localhost:3000` and the backend at `http://localhost:5000`.

## License

This project is licensed under the MIT License.

