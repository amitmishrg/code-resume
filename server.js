const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();
const port = process.env.PORT || 8000;

app.use(compression());
app.use(express.static(path.join(__dirname, "build")));
app.use(express.static(path.join(__dirname, "assets")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));