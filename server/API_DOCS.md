# Nexo Backend API Documentation

## Base URL

```
http://localhost:PORT
```

Replace `PORT` with the value of the `PORT` env variable (defaults to 3000).

## Summary Table

| Endpoint                 | Method | Auth        | Description                       |
| ------------------------ | ------ | ----------- | --------------------------------- |
| `/api/users/register`    | POST   | No          | Register a new user               |
| `/api/users/login`       | POST   | No          | Login user                        |
| `/api/users/profile`     | GET    | User JWT    | Get authenticated user profile    |
| `/api/users/logout`      | POST   | User JWT    | Logout user (blacklists token)    |
| `/api/captains/register` | POST   | No          | Register a new captain            |
| `/api/captains/login`    | POST   | No          | Login captain                     |
| `/api/captains/profile`  | GET    | Captain JWT | Get authenticated captain profile |
| `/api/captains/logout`   | POST   | Captain JWT | Logout captain (blacklists token) |

All bodies & responses are JSON. Auth token supplied via HTTP-only cookie `token` OR `Authorization: Bearer <JWT>` header.

---

## User Endpoints

### Register User

`POST /api/users/register`

Request Body:

```
{
  "fullName": { "first": "John", "last": "Doe" },
  "email": "john@example.com",
  "password": "secret123"
}
```

201 Created:

```
{
  "user": {
    "_id": "64f...",
    "fullName": { "first": "John", "last": "Doe" },
    "email": "john@example.com",
    "socketId": null,
    "__v": 0
  },
  "token": "<JWT>"
}
```

400 Validation / Creation Error:

```
{ "errors": [ { "msg": "First name is required.", "param": "fullName.first", ... } ] }
```

### Login User

`POST /api/users/login`

Request Body:

```
{ "email": "john@example.com", "password": "secret123" }
```

200 OK:

```
{ "user": { ...user }, "token": "<JWT>" }
```

401 Invalid Credentials:

```
{ "error": "Invalid email or password." }
```

400 Validation Error:

```
{ "errors": [ ... ] }
```

### Get User Profile

`GET /api/users/profile`

Headers (choose one):

```
Authorization: Bearer <JWT>
```

or cookie: `token=<JWT>`

200 OK:

```
{ "user": { "_id": "...", "fullName": { ... }, "email": "...", "socketId": null } }
```

404 Not Found:

```
{ "error": "User not found." }
```

401 Unauthorized / Invalid Token:

```
{ "error": "Invalid token." }
```

### Logout User

`POST /api/users/logout`

200 OK:

```
{ "message": "Logged out successfully." }
```

401 Unauthorized (no / blacklisted token):

```
{ "error": "Unauthorized access." }
```

---

## Captain Endpoints

### Register Captain

`POST /api/captains/register`

Request Body:

```
{
  "fullName": { "first": "Alice", "last": "Rider" },
  "email": "alice@example.com",
  "password": "secret123",
  "vehicle": {
    "type": "car",
    "plate": "ABC-1234",
    "model": "Toyota Prius",
    "color": "Blue",
    "capacity": 4
  }
}
```

201 Created:

```
{ "captain": { "_id": "...", "fullName": { ... }, "email": "...", "vehicle": { ... }, "status": "inactive" }, "token": "<JWT>" }
```

422 Validation Error:

```
{ "errors": [ { "msg": "Vehicle type is required.", "param": "vehicle.type", ... } ] }
```

### Login Captain

`POST /api/captains/login`

Request Body:

```
{ "email": "alice@example.com", "password": "secret123" }
```

200 OK:

```
{ "captain": { ...captain }, "token": "<JWT>" }
```

404 Not Found:

```
{ "error": "Captain not found" }
```

401 Invalid Credentials:

```
{ "error": "Invalid credentials" }
```

### Get Captain Profile

`GET /api/captains/profile`

200 OK:

```
{ "captain": { ...captain } }
```

### Logout Captain

`POST /api/captains/logout`

200 OK:

```
{ "message": "Logged out successfully." }
```

401 Unauthorized:

```
{ "error": "Unauthorized access." }
```

---

## Authentication Details

- JWT is valid for 24h (`expiresIn: "24h"`).
- Blacklisted tokens are rejected before JWT verification.
- Either cookie or Authorization header can be used; header format: `Bearer <token>`.

## Validation Rules (Summary)

| Field              | Constraints                                                   |
| ------------------ | ------------------------------------------------------------- |
| `fullName.first`   | required (users & captains), min length 2 (user), 3 (captain) |
| `fullName.last`    | required, same min lengths as above                           |
| `email`            | required, valid email, unique per model                       |
| `password`         | required, min length 6                                        |
| `vehicle.type`     | required (captain), enum: car, bike, auto                     |
| `vehicle.plate`    | required (captain)                                            |
| `vehicle.model`    | required (captain)                                            |
| `vehicle.color`    | required (captain)                                            |
| `vehicle.capacity` | required (captain) integer >=1                                |

## Error Formats

Validation errors:

```
{ "errors": [ { "msg": "...", "param": "...", "location": "body" } ] }
```

General errors:

```
{ "error": "Message" }
```

## Notes

- All timestamps shown in examples are illustrative.
- Passwords are never returned in responses (password field has `select: false`).
- Update this document as new resources are added.
