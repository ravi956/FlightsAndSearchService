const express = require('express');
const {
  CityController,
  FlightController,
  AirportController,
} = require('../../controllers/index');
const { FlightMiddlewares } = require('../../middlewares/index');

const router = express.Router();

router.post('/cities', CityController.create);
router.delete('/cities/:id', CityController.destroy);
router.get('/cities/:id', CityController.get);
router.get('/cities', CityController.getAll);
router.patch('/cities/:id', CityController.update);

router.post(
  '/flights',
  FlightMiddlewares.validateCreateFlight,
  FlightController.create
);
router.get('/flights/:id', FlightController.get);
router.get('/flights', FlightController.getAll);
router.patch('/flights/:id', FlightController.update);

router.post('/airports', AirportController.create);

module.exports = router;
