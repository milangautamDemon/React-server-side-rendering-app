import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import path from "path";
import fs from "fs";
import App from "../src/App";
const app = express();
const router = express.Router();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, "../dist"), { maxAge: "30d" }));

router.use("^/$", (req, res) => {
  fs.readFile(
    path.resolve(__dirname, "../dist/index.html"),
    "utf-8",
    (error, data) => {
      if (error) {
        console.error("File read error:", error);
        return res.status(500).send("Internal Server Error");
      }
      const appString = ReactDOMServer.renderToString(<App />);
      const html = data.replace(
        `<div id="root"></div>`,
        `<div id="root">${appString}</div>`
      );
      res.send(html);
    }
  );
});

app.use(router);
app.listen(PORT, () => console.log(`Server listen at port ${PORT}`));
