const Joi = require("joi");

const { sanitize } = require("../helpers/utils");
const PowerEvent = require("../models/PowerEvent");

const createPowerEvent = async (req, res) => {
  const validator = Joi.object({
    motorId: Joi.number().required(),
    event: Joi.string().valid("on", "off").required(),
  });
  console.log(req.body);
  validator.validate(req.body);
  await PowerEvent.create(req.body);
  res.status(201).send();
};

const listPowerEvents = async (req, res) => {
  const events = (
    await PowerEvent.find({
      timestamp: {
        $gte: new Date(parseInt(req.query.start)),
        $lt: new Date(parseInt(req.query.end)),
      },
      motorId: req.query.motorId,
    })
      .sort({ timestamp: "asc" })
      .lean()
  ).map((event) => {
    return sanitize(event);
  });
  res.status(200).send(events);
};

module.exports = { createPowerEvent, listPowerEvents };
