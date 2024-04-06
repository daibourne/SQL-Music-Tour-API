// DEPENDENCIES
const stage = require('express').Router()
const db = require('../models')
const { Stage } = db

// FIND ALL STAGES
stage.get('/', async (req, res) => {
    try {
        const data = await Stage.findAll()
        res.status(200).json(foundStage)
    } catch(error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC BAND 
stage.get('/:id', async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: { stage_id: HTMLTableRowElement.params.id }
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE A STAGE 
stage.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new Stage',
            data: newStage
        })
    } catch(error) {
        res.status(500).json(error)
    }
})

// UPDATE A STAGE 
stage.put('/id', async (req, res) => {
    try {
        const updatedStage = await Stage.update(req.body, {
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedStage} stage(s)`
        })
    } catch(error) {
        res.status(500).json(error)
    }
})

//DELETE A STAGE
stage.delete('/:id', async (req, res) => {
    try {
        const deletedStage = await Stage.destroy({
            where: {
                stage_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedStage} stage(s)`
        })
    } catch(error) {
        res.status(500).json(error)
    }
})

// EXPORT 
module.exports = stage