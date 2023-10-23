const { required } = require("@hapi/joi");
var express = require("express");
var router = express.Router();

var {
  Rider_VaccineOrder,
  validate,
} = require("../../model/riderModel/orderModel");

// add a new record
router.post("/", async (req, res) => {
  let { error } = validate(req.body);
  console.log(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  console.log(req.body);

  let rider_VaccineOrder = new Rider_VaccineOrder();
  rider_VaccineOrder.my_ID = req.body.my_ID;
  rider_VaccineOrder.vaccine_name = req.body.vaccine_name;
  rider_VaccineOrder.vaccine_category = req.body.vaccine_category;
  rider_VaccineOrder.quantity = req.body.quantity;
  rider_VaccineOrder.price = req.body.price;

  await rider_VaccineOrder.save();
  return res.send(rider_VaccineOrder);
});

module.exports = router;
