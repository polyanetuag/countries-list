import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/home.tsx"),
  route("country-details/:code", "pages/countryDetails.tsx"),
] satisfies RouteConfig;
