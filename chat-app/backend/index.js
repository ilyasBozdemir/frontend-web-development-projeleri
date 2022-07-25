const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors({
    origin: "*",
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.get("/", (req, res) => {
  res.send("test api");
});

const port = 3100;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
