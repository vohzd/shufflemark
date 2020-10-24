const express = require("express");
const server = express();
require("./config/server.js")(server);
require("./config/db.js");

const websiteRoutes  = require("./routes/website/index.js");

server.use("/", websiteRoutes);

module.exports = {
  path: "/api",
  handler: server
}
