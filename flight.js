const express = require('express');
const router = express.Router();

const flights = [
  {
    id: 'abcd123',
    registration: 'N12345',
    previousCity: 'Los Angeles',
    currentCity: 'New York',
    nextCity: 'London',
  },
  {
    id: 'efgh456',
    registration: 'N67890',
    previousCity: 'London',
    currentCity: 'Paris',
    nextCity: 'Madrid',
  },
  {
    id: 'ijkl789',
    registration: 'N24680',
    previousCity: 'Sydney',
    currentCity: 'Tokyo',
    nextCity: 'Los Angeles',
  },
];


router.get('/flight/:registration', (req, res) => {
 
  const registration = req.params.registration;
  console.log(registration);


  const flight = flights.find((f) => f.id === registration);

  if (!flight) {
  
    res.status(404).send('Flight not found');
  } else {

    res.json(flight);
  }
});

module.exports = router;
