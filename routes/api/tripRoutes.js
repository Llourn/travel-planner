const router = require("express").Router();
const { Trip, Traveller, Location } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const tripData = await Trip.findAll({
      include: [{ model: Traveller }, { model: Location }],
      attributes: {
        exclude: ["traveller_id", "location_id"],
      },
    });
    res.status(200).json(tripData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const tripData = await Trip.create(req.body);
    res.status(200).json({
      message: "Trip created successfully!",
      trip: tripData,
    });
  } catch (err) {
    res.status(400).json({ message: "Failed to create new trip", error: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tripData = await Trip.findByPk(req.params.id, {
      include: [{ model: Traveller }, { model: Location }],
      attributes: {
        exclude: ["traveller_id", "location_id"],
      },
    });

    if (!tripData) {
      res.status(404).json({ message: "No trip found with that id!" });
      return;
    }

    res.status(200).json({ message: "Trip found!", trip: tripData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tripData) {
      res.status(404).json({ message: "No trip found with that id!" });
      return;
    }

    res.status(200).json({ message: "Trip deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete trip", error: err });
  }
});

module.exports = router;
