const data = require("../db");

const get = (req, res) => {
  const size = Number(req.params.size);
  console.log(req.params);
  res.send({ files: data.slice(0, size) });
};

module.exports = get;
