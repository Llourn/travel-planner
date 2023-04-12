# Travel Planner

## Description

A NodeJS app that allows a traveller to create accounts, add locations, and plan/review trips.

Built with NodeJS, ExpressJS, MySQL and Sequelize.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

Requirements:

- Node v18.x
- MySQL Server

Instructions:

- clone this repo.
- cd into project directory
- npm install
- update MySQL database connection configuration in `./config/connection.js` or create a `.env` file in the root of the project and include the following entries `DB_NAME`, `DB_USER`, `DB_PASSWORD`, and `PORT`. (feel free to replace mysql with any other db supported by sequelize)
- `npm run start`

Seed Data:

- `npm run seed`

## Usage

Once the app is running the following endpoints will be available for use.

### Travellers

GET `/api/travellers`

POST `/api/travellers`

GET `/api/travellers/:id`

DELETE `/api/travellers/:id`

### Locations

GET `/api/locations`

POST `/api/locations`

GET `/api/locations/:id`

DELETE `/api/locations/:id`

### Trips

POST `/api/trips`

DELETE `/api/trips/:id`

TODO: Add more info and examples.

## License

MIT License Copyright (c) 2023 Lorne Cyr
