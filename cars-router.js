const express = require('express');
const db = require('./data/db-config.js');
const { count } = require('./data/db-config.js');
const router = express.Router();

router.get('/', (req, res) => {
    db.select('*')
    .from('cars')
    .then(cars => {
        res.status(200).json({ data: cars})
    })
    .catch(err => console.log(err));
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('cars')
    .where('id', id)
    .first()
    .then(cars => {
        res.status(200).json({ data: cars})
    })
    .catch(err => console.log('Error finding id'));
});

router.post('/', (req, res) => {
    const carsData = req.body;
    db('cars')
    .insert(carsData)
    .then(res.status(201).json({ data:carsData }))
    .catch(err => console.log('Error creating car post'));
});

router.put('/:id', (req, res) => {
    const { id } =req.params;
    const changes = req.body;
    db('cars')
    .where('id', id)
    .update(changes)
    .then(count => {
        if(count > 0) {
            res.status(201).json({ data: count})
        } else {
            res.status(404).json('Error creating car post')
        } 
    })
    .catch(err => console.log(err))
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('cars')
    .where('id', id)
    .del()
    .then(count => {
        if(count > 0) {
            res.status(200).json({ data:count })
        } else {
            res.status(404).json('Error deleting car')
        }
    })
    .catch(err => console.log(err))
});

module.exports = router;