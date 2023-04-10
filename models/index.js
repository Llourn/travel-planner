const Traveller = require("./Traveller");
const Location = require("./Location");
const Trip = require("./Trip");

Trip.hasMany(Traveller, {
  foreignKey: "traveller_id",
});

Trip.hasMany(Location, {
  foreignKey: "traveller_id",
});

module.exports = { Traveller, Location, Trip };
