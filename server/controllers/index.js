const express = require("express");
const { getData, postData } = require("../database/queries");

const router = express.Router();

router.get("/users", (req, res) => {
  getData()
    .then((data) => {
      res.json(data.rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "server error" });
    });
});

router.post("/create-user", (req, res) => {
  // res.json(req.body);
  const { name, location } = req.body;
  postData({ name, location })
    .then((data) => {
      console.log(data.rows);
      /*res.status(201).json({
        message: "success",
        data: data.rows[0],
      });*/
      res.redirect("/");
    })
    .catch((err) => res.status(500).json({ msg: "server error" }));
});

module.exports = router;
