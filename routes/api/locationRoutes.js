const router = require("express").Router();
const { Location, Traveller } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const locationData = await Location.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
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
