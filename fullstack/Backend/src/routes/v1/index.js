const express = require("express");
const user = require("./user.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/user",
    route: user,
  },
];

defaultRoutes.forEach((route) => {
  if (route.middleware) router.use(route.path, route.middleware, route.route);
  else router.use(route.path, route.route);
});

module.exports = router;
