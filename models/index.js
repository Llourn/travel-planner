const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

Traveller.belongsToMany(Location, {
  through: Trip,
  foreignKey: "traveller_id",
  unique: false,
});

Location.belongsToMany(Traveller, {
  through: Trip,
  foreignKey: "location_id",
  unique: false,
});

module.exports = { Traveller, Location, Trip };
