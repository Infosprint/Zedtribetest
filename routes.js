const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  let data = [];
  try {
    const rawData = fs.readFileSync('./data.json');
    data = JSON.parse(rawData);
  } catch (error) {
    console.error(error);
  }
  res.json(data);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  let data = {};
  try {
    const rawData = fs.readFileSync('./data.json');
    const dataArray = JSON.parse(rawData);
    data = dataArray.find(item => item.id === id) || {};
  } catch (error) {
    console.error(error);
  }
  res.json(data);
});

router.post('/', (req, res) => {
  const { id, notes } = req.body;
  const newData = { id, notes };
  let data = [];
  try {
    const rawData = fs.readFileSync('./data.json');
    data = JSON.parse(rawData);
  } catch (error) {
    console.error(error);
  }
  data.push(newData);
  try {
    fs.writeFileSync('./data.json', JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
  res.send(`Data with ID ${id} added to database`);
});

module.exports = router;
