import {
    type RouteConfig,
    route,
  } from "@react-router/dev/routes";
  
  export default [
    route("/", "./routes/landing-page.tsx"),
    route("/home", "./routes/home.tsx"),
    route("/login", "./routes/login.tsx"),
    route("/register", "./routes/register.tsx"),
  ] satisfies RouteConfig;