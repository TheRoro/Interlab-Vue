# interLab Web Application

Interlab is a LinkedIn clone, developed in Vue.js in the Front-End and .Net Core in the backend. I was in charge of the Majority of the Front-End programming and the database design.

## Web Application developed in Vue

The frontend uses Vue 3, Vuetify 3, and Vite.

```powershell
npm install
npm run serve
```

Create a local `.env.local` file to override the API endpoint:

```text
VITE_API_BASE_URL=https://example.com
```

Use `npm run build` for a production build and `npm run lint` to lint the source.

## Authentication API requirements

The frontend expects the API to authenticate with an `HttpOnly`, `Secure`,
`SameSite` session cookie. `POST /api/auth/login` accepts `login` and `password`,
`GET /api/auth/session` restores the current session, and `POST /api/auth/register`
accepts the account and profile fields. The authentication endpoints return:

```json
{
  "user": {
    "id": 1,
    "firstName": "Example",
    "role": "student",
    "companyId": null
  }
}
```

The API must hash passwords with Argon2id, scrypt, or bcrypt and must never return
passwords or password hashes. Every non-public endpoint must validate the session
and derive the acting user from it. The `/api/me` routes must derive user and
company ownership exclusively from that session. The API must enforce ownership
and role authorization for every read or mutation and return `401` or `403` when
access is denied. State-changing requests also require Origin validation and CSRF
protection appropriate to the chosen cookie `SameSite` policy.
