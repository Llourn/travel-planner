const router = require("express").Router();
const { Location, Traveller } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const locationData = await Location.findAll({
      include: [{ model: Traveller }],
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const locationData = await Location.create(req.body);
    res.status(200).json({
      message: "Location created successfully!",
      location: locationData,
    });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "Failed to create new location", error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id);

    if (!locationData) {
      res.status(404).json({ message: "No location found with that id!" });
      return;
    }

    res
      .status(200)
      .json({ message: "Location found!", location: locationData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!locationData) {
      res.status(404).json({ message: "No location found with that id!" });
      return;
    }

    res.status(200).json({ message: "Location deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete location", error: err });
  }
});

module.exports = router;
