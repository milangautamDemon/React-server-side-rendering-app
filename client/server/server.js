import express from "express";
import React from "react";
import ReactDomServer from "react-dom/server";
import path from "path";
import fs from "fs";
const app = express();
const router = express.Router();

router.use("^/$", (req, res) => {
  fs.readfile(path.resolve("./build/index.html"), "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      return res.status(500).send("error", error);
    }
    res.send(
      data.replace(
        `<did id="root">${ReactDomServer.renderToString(<app />)}</ div>`
      )
    );
  });
});

app.listen(PORT, () => console.log(`Server listen at port ${PORT}`));
