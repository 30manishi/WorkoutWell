const express = require('express')
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')

const router =express.Router()

//get all workouts
router.get('/', getWorkouts)

//get a single workout
router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router