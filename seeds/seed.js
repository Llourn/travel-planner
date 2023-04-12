const sequelize = require("../config/connection");
const { Traveller, Location, Trip } = require("../models");

const travellerSeedData = require("./travellerSeedData.json");
const locationSeedData = require("./locationSeedData.json");

const seedDatabase = async () => {
  await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
  await sequelize.sync({ force: true });

  const travellers = await Traveller.bulkCreate(travellerSeedData);

  const locations = await Location.bulkCreate(locationSeedData);

  let test = [];
  // Create trips at random
  for (let i = 0; i < 10; i++) {
    // Get a random traveller's `id`
    const { id: randomTravellerId } =
      travellers[Math.floor(Math.random() * travellers.length)];

    // Get a random location's `id`
    const { id: randomLocationId } =
      locations[Math.floor(Math.random() * locations.length)];

    // Create a new trip with random `trip_budget` and `traveller_amount` values, but with ids selected above
    await Trip.create({
      trip_budget: (Math.random() * 10000 + 1000).toFixed(2),
      traveller_amount: Math.floor(Math.random() * 10) + 1,
      traveller_id: randomTravellerId,
      location_id: randomLocationId,
    }).catch((err) => {
      console.log(err);
    });
  }
  process.exit(0);
};

seedDatabase();
