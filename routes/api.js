let express = require("express");
let router = express.Router();

router.use((req, res, next) => {
  console.log("api middleware");
  if (req.method === "GET") {
    return next();
  }
  if (!req.isAuthenticated()) {
    console.log("not auth");
    res.redirect("/#login");
  }

  next();
});

router.get("/posts", (req, res) => {
  console.log();
  res.send({ message: "TODO Return all posts" });
});

router.post("/posts", (req, res) => {
  console.log();
  res.send({ message: "TODO Create New posts" });
});

router.get("/posts/:id", (req, res) => {
  console.log();
  res.send({ message: "TODO Return Single post " + req.params.id });
});

router.put("/posts/:id", (req, res) => {
  console.log();
  res.send({ message: "TODO Edit Single post " + req.params.id });
});

router.delete("/posts/:id", (req, res) => {
  console.log();
  res.send({ message: "TODO Delete Single post " + req.params.id });
});

module.exports = router;
