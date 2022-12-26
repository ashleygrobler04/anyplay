const signup = (req, res) => res.render("signup");

const signin = (req, res) => res.render("signin");

const upload = (req, res) => res.render("upload");

const browse = (req, res) => res.render("browse");

module.exports = { signup, signin, upload, browse };
