const express = require("express");
const user = require("./user.route");
const authRoute = require("./auth.route");
const blogRoute = require("./blog.route");
const FaqRoute = require("./faq.route");
const HomeRoute = require("./home.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/user",
    route: user,
  },
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/blog",
    route: blogRoute,
  },
  {
    path: "/faq",
    route: FaqRoute,
  },
  {
    path: "/home",
    route: HomeRoute,
  },
];

defaultRoutes.forEach((route) => {
  if (route.middleware) router.use(route.path, route.middleware, route.route);
  else router.use(route.path, route.route);
});

module.exports = router;
