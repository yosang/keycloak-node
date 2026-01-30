# Project

Demonstrates a simple configuration of NodeJS using keycloak for authentication.

## Keycloak

Keycloak is an open source Identity Access Management (IAM) which provides authentication / authorization capabilities.

It was originally developed by Red Hat.

**Think of it this way**
Would you store user passwords and sessions in a plain JSON file? Or would you use a proper database with hashing, salting, rate limiting, etc.?

That is the entire purpose of a service like IAM, we offload the security stuff such as login forms, social logins, 2FA, role management, password hashing, tokens signing as well as refreshing tokens to a dedicated server.

However, for this application we are using a `development` instance of keycloak, which embeds its own database. For a `production` solution, we would instead connect keycloak to an existing database server.

## Features demonstrated here

- OpenID Connect authentication flow.
- Protected routes.
- Session management with express.
- Access to user token info after login through keycloaks adapter.
- Login/Logout redirection handled by keycloaks adapter.

To read more, visit [keycloak](https://www.keycloak.org/).

# Usage

These two guides were used to setup this demonstration from scratch:

- [Docker instance of keycloak](https://www.keycloak.org/getting-started/getting-started-docker)
- [NodeJS adapter for keycloak](https://www.keycloak.org/securing-apps/nodejs-adapter)

Once run and configured the Docker server, replace the `keycloak.json` file in this project with yours.

You can get this file from `Clients > YOUR CLIENT > CLICK ON ACTION > DOWNLOAD ADAPTER CONFIG > Keycloak OIDC JSON`.

Otherwise create your own config inside `index.js`.

Once the `keycloak config` is in place, install the project dependencies with `npm install`

Run the application with `npm start`

Visit `http://local:3000/` and click around to login/logout using the keycloak service.

# Requirements

- Node 20+
- Docker
- npm

# Author

[Yosmel Chiang](https://github.com/yosang)
