const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const fetch = require("node-fetch");
const app = express();

app.enable("trust proxy");
app.use(cors());
app.options("*", cors());

app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static("public"));
app.use(express.json());
app.use(bodyparser.json({ type: "application/*+json" }));

app.post("/user", async (req, res) => {
  const resp = await fetch("http://vax.hyperx.cloud:5555/postUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });
  const d = await resp.json();

  res.send(d);
});

app.listen(5126, () => {
  console.log("started");
});
