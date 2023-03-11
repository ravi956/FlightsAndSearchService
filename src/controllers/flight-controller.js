const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(201).json({
      data: flight,
      success: true,
      errr: {},
      message: 'Successfully created a flight',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to create a flight',
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.params.id);
    return res.status(200).json({
      data: flight,
      success: true,
      errr: {},
      message: 'Successfully fetched the flight',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch the flight',
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlights(req.query);
    return res.status(200).json({
      data: flights,
      success: true,
      errr: {},
      message: 'Successfully fetched the flights',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to fetch the flights',
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await flightService.updateFlight(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      errr: {},
      message: 'Successfully updated the flight',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: 'Not able to update the flight',
      err: error,
    });
  }
};

module.exports = {
  create,
  get,
  getAll,
  update,
};
