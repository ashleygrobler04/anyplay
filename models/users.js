const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must provide a name in string format"],
    },
    password: {
        type: String,
        required: [true, "You must provide a password in string format"],
    },
});

module.exports = mongoose.model("users", userSchema);
