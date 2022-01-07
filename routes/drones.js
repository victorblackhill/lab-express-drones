const express = require("express");
const { render } = require("express/lib/response");
const async = require("hbs/lib/async");
const { findOneAndUpdate } = require("./../models/Drone.model");
const router = express.Router();

// require the Drone model here
const Drone = require("./../models/Drone.model");

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const dronesToDisplay = await Drone.find();
    console.log(dronesToDisplay[0]);
    res.render("./../views/drones/list.hbs", { drone: dronesToDisplay });
  } catch (err) {
    next(err);
  }
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    res.render("./../views/drones/create-form.hbs");
  } catch (err) {
    next(err);
  }
});

router.post("/drones/create", async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const added = await Drone.create(req.body);
    console.log("added this drone", added);
  } catch (err) {
    next(err);
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone

  try {
    const retrieved = await Drone.findById(req.params.id);
    console.log("retrieved drone", retrieved);
    res.render("./../views/drones/update-form.hbs", { retrieved: retrieved });
  } catch (err) {
    next(err);
  }
});

router.post("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  console.log(req.body);
  console.log("/drones/" + req.params.id + "/edit/")

  try {
    await Drone.findOneAndUpdate({id:req.params.id},req.body)
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

router.get("/drones/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    await Drone.findOneAndDelete({id:req.params.id})
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
