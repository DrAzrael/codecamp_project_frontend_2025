import {
    type RouteConfig,
    route,
  } from "@react-router/dev/routes";
  
  export default [
    route("/", "./routes/landing-page.tsx"),
    route("/home", "./routes/home.tsx"),
    route("/ask/:bot_id", "./routes/ask.tsx"),
  ] satisfies RouteConfig;