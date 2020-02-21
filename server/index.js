import "dotenv/config";

import express from "express";
import next from "next";
import api from "./api";

/* istanbul ignore next */
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const favicon = require("serve-favicon");
const path = require("path");

export const server = express();

server.use(favicon(path.join(__dirname, "../", "assets", "favicon.ico")));
server.use("/api", api);

/* istanbul ignore next */
app.prepare().then(() => {
  server.all("*", handle);

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
