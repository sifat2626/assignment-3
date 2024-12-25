# Blog Management Backend System

## Overview

This project is the backend system for managing blogs and users with administrative privileges. It is built using modern and scalable technologies, focusing on providing robust APIs for blog and user management. This backend can be integrated into a larger application for managing blog content and user access.

## Features

### Blog Management

- Create, update, delete blogs by authenticated users.
- Admin can delete blogs by ID.

### User Management

- Delete users by ID (Admin-only privilege).
- Block users by ID (Admin-only privilege).

### Authentication and Authorization

- Secure endpoints for both user and admin operations.
- Validation of requests with proper error handling.

### Error Handling

- Consistent and user-friendly error messages for all API responses.

## Technologies Used

- **Language:** TypeScript (for type safety and better developer experience)
- **Runtime:** Node.js
- **Framework:** Express.js (for building RESTful APIs)
- **Database:** MongoDB with Mongoose (for data modeling and database interaction)
- **Validation:** Zod (for request schema validation)
- **HTTP Status Management:** http-status (for standardized HTTP status codes)
- **Authentication:** JWT (for secure token-based authentication)

## Setup Instructions

### Prerequisites

- Ensure you have Node.js and npm installed.
- Install MongoDB or have access to a MongoDB cloud instance.

### Clone the repository

```bash
git clone <https://github.com/sifat2626/assignment-3.git>
```

### Installation

Navigate to the project directory:

```bash
cd blog-management-backend
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the root directory with the following variables:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/blog-management
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### Running the Application

Start the server in development mode:

```bash
npm run dev
```

The backend will run at `http://localhost:5000` by default.

### Running in Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## API Endpoints

### Blog Management

#### Create Blog

- **Endpoint:** `POST /api/blogs`
- **Description:** Allows users to create a new blog.

#### Update Blog

- **Endpoint:** `PATCH /api/blogs/:id`
- **Description:** Allows users to update their own blog by ID.

#### Delete Blog

- **Endpoint:** `DELETE /api/blogs/:id`
- **Description:** Allows users to delete their own blog by ID.

#### Admin Delete Blog

- **Endpoint:** `DELETE /api/admin/blogs/:id`
- **Description:** Allows admins to delete any blog by ID.

### User Management

#### Delete User

- **Endpoint:** `DELETE /api/admin/users/:id`
- **Description:** Deletes a user by their ID.

#### Block User

- **Endpoint:** `PATCH /api/admin/users/:id/block`
- **Description:** Blocks a user by their ID.

## Project Structure

```
src/
├── app/
│   ├── modules/
│   │   ├── User/
│   │   │   ├── user.controller.ts
│   │   │   ├── user.model.ts
│   │   │   ├── user.service.ts
│   │   │   └── user.route.ts
│   │   ├── Blog/
│   │   │   ├── blog.controller.ts
│   │   │   ├── blog.model.ts
│   │   │   ├── blog.service.ts
│   │   │   └── blog.route.ts
│   │   └── Admin/
│   │       ├── admin.controller.ts
│   │       ├── admin.service.ts
│   │       └── admin.route.ts
├── config/
│   └── index.ts
├── middlewares/
│   ├── validateRequest.ts
│   ├── globalErrorHandler.ts
│   └── auth.ts
├── utils/
│   ├── catchAsync.ts
│   └── sendResponse.ts
└── server.ts
```

## Live URL

The backend system is live at: [https://assignment-3-lac-zeta.vercel.app/](https://assignment-3-lac-zeta.vercel.app/)

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or support, please contact:

- **Email:** admin@example.com
- **GitHub:** Your GitHub Username
