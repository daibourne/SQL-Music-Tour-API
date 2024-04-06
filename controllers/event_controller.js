// DEPENDENCIES
const event = require('express').Router()
const db = require('../models')
const { Event } = db

//INDEX / SORT EVENTS ROUTE 
Event.get('/', async (req, res) => {
    try {
        const data = await Event.find()
        const sortedData = data.sort(date)
        res.send(sortedData)

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

//FIND A SPECIFIC EVENT
Event.get('/:id', async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: { event_id: req.params.id }
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE A EVENT
Event.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: 'Successfully created new event!',
            data: newEvent
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//UPDATE A EVENT 
Event.put('/:id', async (req, res) => {
    try {
        const updateEvent = await Event.update(req.Event, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updateEvent} event(s)`
        })
    } catch (error) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
Event.delete('/:id', async (req, res) => {
    try {
        const deletedEvent = await Event.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvent} event(s)`
        })
    } catch(error) {
        res.status(500).json(error)
    }
})

//EXPORT    
module.exports = event