# Routes

Routes define the endpoints of your application and map HTTP requests to specific controller functions. They act as the entry point for all incoming requests and determine which controller should handle each request.

## Purpose
- Define API endpoints
- Map URLs to controller functions
- Organize endpoints by resource
- Apply middleware to specific routes
- Handle different HTTP methods (GET, POST, PUT, DELETE)

## HTTP Methods and Their Usage

- **GET**: Retrieve data (read-only)
- **POST**: Create new resource
- **PUT**: Update entire resource
- **PATCH**: Partially update resource
- **DELETE**: Remove resource

## Route Naming Conventions

```javascript
// Good: RESTful and clear
GET    /api/users          // Get all users
GET    /api/users/:id      // Get user by ID
POST   /api/users          // Create user
PUT    /api/users/:id      // Update user
DELETE /api/users/:id      // Delete user

// Bad: Inconsistent and unclear
GET    /api/getAllUsers
GET    /api/user/:id
POST   /api/createNewUser
PUT    /api/updateUser/:id
```