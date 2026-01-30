const express = require("express");
const session = require("express-session");
const Keycloak = require("keycloak-connect");

const app = express();

// Setup EJS just to see authentication in action
app.set("view engine", "ejs");

// Configure sessions with a memoryStore
const mStore = new session.MemoryStore();

app.use(
  session({
    secret: "super_secret",
    resave: false,
    saveUninitialized: true,
    store: mStore,
  }),
);

// Initialise keycloak
// The second parameter is a config object
// Here we are not specificing a configuration, its using keycloak.json by default from root folder
const keycloak = new Keycloak({ store: mStore });

// Uses the keycloak middleware app-wide
app.use(keycloak.middleware());

// Routes
app.get("/", (_, res) => {
  res.render("index", { user: false });
});

// Enables a protection middleware on this route
// For this to work we must enable valid URI's on keycloaks server
app.get("/auth", keycloak.protect(), (req, res) => {
  const keycloakObj = req.kauth?.grant.access_token.content;

  // console.log(keycloakObj); // Logs the content of the user, which is stored in a JSONWebToken

  res.render("index", { user: keycloakObj.given_name });
});

app.get("/logout", (req, res) => {
  res.redirect(keycloak.logoutUrl(req)); // Logs out the user from both client and server
});

app.listen(3000, () => console.log("App is running on port 3000"));
