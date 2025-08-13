# Nexo Backend

RESTful backend service for a ride / mobility style platform supporting two actor types:

- Users (riders)
- Captains (drivers)

It provides registration, authentication (JWT), profile retrieval, and logout with token blacklisting using MongoDB TTL indexes.

## Tech Stack

- Node.js (ES Modules)
- Express 5
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcryptjs (password hashing)
- express-validator (request validation)
- cookie-parser & CORS

## Features

- Separate auth flows for Users and Captains
- Secure password hashing (bcrypt, per-user salt)
- JWT auth via HTTP‑only cookie or Authorization header
- Token blacklist collection with automatic 24h TTL expiry
- Input validation with detailed error reporting
- Captain vehicle & location data model

## Project Structure

```
server/
  app.js            # Express app wiring
  server.js         # HTTP server bootstrap & DB connection
  config/
    connectDB.js    # Mongo connection logic
  models/           # Mongoose models (User, Captain, BlacklistToken)
  controllers/      # Route handlers
  services/         # Business logic helpers
  middlewares/      # Auth middlewares (user & captain)
  routes/           # Express routers
  API_DOCS.md       # Detailed endpoint documentation
  README.md         # (this file)
```

## Environment Variables

Create a `.env` file in `server/` (same directory as `package.json`).

| Variable      | Required          | Description                                  |
| ------------- | ----------------- | -------------------------------------------- |
| `PORT`        | No (default 3000) | Port server listens on                       |
| `MONGODB_URI` | Yes               | MongoDB connection string                    |
| `JWT_SECRET`  | Yes               | At least 16 chars; used to sign JWTs         |
| `NODE_ENV`    | No                | Set to `production` to enable secure cookies |

Example `.env`:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/nexo
JWT_SECRET=change_this_to_a_long_random_secret
NODE_ENV=development
```

## Installation & Run

From inside the `server/` directory:

```
npm install
npm run dev    # starts with nodemon
# or
npm start      # plain node
```

Server will log: `Server is running on port <PORT>` once MongoDB is connected.

## API Quick Summary

| Endpoint                 | Method | Auth          | Description                 |
| ------------------------ | ------ | ------------- | --------------------------- |
| `/api/users/register`    | POST   | No            | Register a user             |
| `/api/users/login`       | POST   | No            | Login user (sets cookie)    |
| `/api/users/profile`     | GET    | Yes (User)    | Get current user profile    |
| `/api/users/logout`      | POST   | Yes (User)    | Logout & blacklist token    |
| `/api/captains/register` | POST   | No            | Register a captain (driver) |
| `/api/captains/login`    | POST   | No            | Login captain               |
| `/api/captains/profile`  | GET    | Yes (Captain) | Get current captain profile |
| `/api/captains/logout`   | POST   | Yes (Captain) | Logout & blacklist token    |

See full request / response examples in `API_DOCS.md`.

## Authentication Model

- On successful register/login a JWT (24h expiry) is issued.
- Token is set as an HTTP-only cookie named `token` and also returned in JSON.
- Clients may authenticate subsequent requests by either:
  - Sending the cookie (browser) OR
  - Supplying `Authorization: Bearer <token>` header.
- Logout inserts the token into `BlacklistToken` (TTL 24h) making it invalid until natural expiry.

## Data Models (Simplified)

User:

```
fullName: { first, last }
email (unique)
password (hashed, not selected by default)
socketId (optional)
```

Captain extends user concept with:

```
status: active|inactive (default inactive)
vehicle: { color, model, plate, capacity, type(car|bike|auto) }
location: { latitude, longitude }
```

BlacklistToken:

```
token (unique)
createdAt (TTL index of 24h)
```

## Validation & Error Shape

Validation uses `express-validator` with structured errors:

```
{ "errors": [ { "msg": "Password must be at least 6 characters long.", "param": "password", ... } ] }
```

Other errors:

```
{ "error": "Unauthorized access." }
```

## Security Notes

- Always set a long random `JWT_SECRET` (>=16 chars as enforced in code).
- Use HTTPS in production so HTTP-only cookie is protected in transit.
- Consider rotating secrets and implementing refresh tokens as future enhancements.

## Extending

Potential next steps:

- Add ride creation & matching logic
- Real-time location updates via WebSockets (socketId field already present)
- Rate limiting & request logging
- Unit & integration test suite (Jest / Supertest)

## License

No license specified yet. Add one (e.g. MIT) if you plan to open source.

## Contributing

1. Fork / branch
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit with conventional messages
4. Open a PR

## Contact

Add maintainer contact info here.
