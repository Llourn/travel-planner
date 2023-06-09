const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false,
  },
  foreignKey: "traveller_id",
});

Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false,
  },
  foreignKey: "location_id",
});

Trip.belongsTo(Traveller, {
  foreignKey: "traveller_id",
});

Trip.belongsTo(Location, {
  foreignKey: "location_id",
});

module.exports = { Traveller, Location, Trip };
