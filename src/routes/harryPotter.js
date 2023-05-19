const express = require("express");
const harryPotterController = require('../controller/harryPotterController');
// dcdc

const router = express();

router.get("/", harryPotterController.getAll);

router.get("/:id", harryPotterController.getById);

router.post("/", harryPotterController.create);

module.exports = router;
