import React from "react";
import ReactDOM from "react-dom/client";
import Auth from "./Auth.jsx";
import Profile from "./auth/Profile.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-t6dkk2dngxsvtohv.us.auth0.com"
    clientId="2NdrLS4gOiU5a1VlqKjl68X3odll9wqA"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <Auth />
    <Profile />
  </Auth0Provider>
  // </React.StrictMode>
);
