const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.write("deneme");
});

const port = 3100;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
