require("dotenv").config();
const express = require("express");
const managerRoute = require("./routes/manager-route");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(express.json());
app.use("/account", managerRoute);

const port = process.env.port || 7777;
app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.listen(port, () => console.log(`The server is listening on port ${port}`));
