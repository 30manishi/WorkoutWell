require('dotenv').config()
const express = require ('express')
const workoutRoutes =require('./routes/workouts')
const mongoose = require('mongoose')

const app = express()

//middleware which will give me the routes
app.use(express.json())
 
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

// routes
app.use('/api/workouts',workoutRoutes)

//connecting to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>{
            console.log("connected to db & lisiting....", process.env.PORT)
        })
    })
    .catch((error) =>{
        console.log(error)
    })


