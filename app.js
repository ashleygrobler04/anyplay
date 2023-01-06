require("dotenv").config();
const express = require("express");
const managerRoute = require("./routes/manager-route");
const connectDB = require("./db/connect");
const users = require("./models/users");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(express.json());
app.use("/account", managerRoute);

const port = process.env.port || 7777;

const insertData = async () =>
    await users.create({ name: "ashley", password: "testing.123" });

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

const start = async () => {
    try {
        await connectDB(process.env.db_url);
        console.log(`inserting data`);
        await insertData();
        console.log(`done`);

        app.listen(port, () =>
            console.log(`The server is listening on port ${port}`)
        );
    } catch (error) {
        console.log(error);
    }
};
start();
