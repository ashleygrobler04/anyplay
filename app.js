const express = require("express");
const managerRoute = require("./routes/manager-route");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(express.json());
app.use("/account", managerRoute);
app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.listen(3000, () => console.log("server started."));
