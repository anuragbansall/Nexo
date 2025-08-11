# Nexo Backend API Documentation

## Base URL

```
http://localhost:PORT/
```

Replace `PORT` with your server's port number.

---

## Endpoints

### 1. Register User

`POST /api/users/register`

#### Request Body

```
{
  "fullName": {
    "first": "string", // required
    "last": "string"   // required
  },
  "email": "string",     // required, must be valid email
  "password": "string"   // required, min 6 chars
}
```

#### Response

- **201 Created**

```
{
  "user": {
    "id": "string",
    "fullName": {
      "first": "string",
      "last": "string"
    },
    "email": "string",
    "createdAt": "ISO8601 timestamp"
  },
  "token": "JWT token"
}
    "fullName": {
- **400 Bad Request** (validation or creation error)
      "last": "string"
    }
    // other user fields as applicable
  },
  "token": "JWT token"
}
```

- **400 Bad Request** (validation or creation error)

```
{
  "errors": [ ... ]
}
```

---

### 2. Login User

`POST /api/users/login`

#### Request Body

```
{
  "email": "string",     // required, must be valid email
  "password": "string"   // required, min 6 chars
}
```

#### Response

- **200 OK**

```
{
  "user": { ...user fields... },
  "token": "JWT token"
- **400 Bad Request** (validation error)
```

- **401 Unauthorized**

```
{
  "error": "Invalid email or password."
}
```

- **400 Bad Request** (validation error)

```
{
  "errors": [ ... ]
}
```

---

## Validation

- All fields are required as described above.
- Email must be valid format.
- Password must be at least 6 characters.

---

## Authentication

- JWT token is returned on successful registration and login.
- Use this token for authenticated requests (future endpoints).

---

## Error Format

- Validation errors:

```
{
  "errors": [
    { "msg": "Error message", "param": "field", ... }
  ]
}
```

- Other errors:

```
{
  "error": "Error message"
}
```

---

## Notes

- All endpoints accept and return JSON.
- Add more endpoints as your API grows.
