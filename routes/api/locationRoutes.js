const router = require("express").Router();

router.get("/", async (req, res) => {
  console.log(req.method, req.originalUrl);
  res.json(req.method + ", " + req.originalUrl);
});

router.post("/", async (req, res) => {
  console.log(req.method, req.originalUrl);
  res.json(req.method + ", " + req.originalUrl);
});

router.get("/:id", async (req, res) => {
  console.log(req.method, req.originalUrl);
  res.json(req.method + ", " + req.originalUrl);
});

router.delete("/:id", async (req, res) => {
  console.log(req.method, req.originalUrl);
  res.json(req.method + ", " + req.originalUrl);
});

module.exports = router;
