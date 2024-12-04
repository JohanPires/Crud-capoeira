const express = require("express");
const router = express.Router();
const EventController = require("../Controller/EventController");

router.get("/event", EventController.getAllEvent);
router.get("/event/:id", EventController.getOneEvent);
router.post("/event", EventController.createEvent);
router.put("/event/:id", EventController.updateEvent);
router.delete("/event/:id", EventController.deleteEvent);

module.exports = router;
