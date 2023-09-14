const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Page can not access with that method";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About Page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Page can not access with that method";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "Wildan" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai, ${name}!`;
      }

      return `Hello, ${name}!`;
    },
  },
  {
    method: "*",
    path: "/(any)",
    handler: (request, h) => {
      return "Page is not found";
    },
  },
];

module.exports = routes;
