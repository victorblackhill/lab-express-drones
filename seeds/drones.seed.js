// Iteration #1

const Drone = require("./../models/Drone.model");
require("./../db/index");


const mongoose = require("mongoose");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

const seedDrones = async function (dronesToInsert) {
  try {
      await Drone.deleteMany()
      //await Drone.mongoose.deleteMany();
      const resp = await Drone.create(dronesToInsert)
      console.log("success drondes added:",resp.length)
      await closeConnection()
  } catch (err) {console.error("seed error =",err)}
};


const closeConnection = async function(){
  try{
    await mongoose.connection.close(()=>{console.log("connection ended successefully")})
    
   } catch(err){console.error("closing connection error",err)

}}


seedDrones(drones)
