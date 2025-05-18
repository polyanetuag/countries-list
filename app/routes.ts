import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home.tsx"),
  route("otherPage", "pages/otherPage.tsx"),
  route("welcome", "pages/welcome.tsx"),
] satisfies RouteConfig;
