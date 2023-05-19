const express = require("express");
const harryPotterController = require('../controller/harryPotterController');
const inputValidation = require('../middlewares/inputValidation');
// dcdc

const router = express();

router.get("/", harryPotterController.getAll);

router.get("/:id", harryPotterController.getById);

router.post("/", inputValidation, harryPotterController.create);

module.exports = router;
