// Iteration #1
//require("express")

const {model, Schema} = require("mongoose");

const droneSchema = new Schema ({
    name:
    {type :String, required:true},
    propellers: Number,
    maxSpeed : Number
})

const Drone = model("drones",droneSchema)


module.exports = Drone