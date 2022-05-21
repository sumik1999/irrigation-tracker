const express = require("express");

const { createPowerEvent, listPowerEvents } = require("../controllers/PowerEvent");

const router = express.Router();
router.post("", createPowerEvent);
router.get("", listPowerEvents);

module.exports = router;
