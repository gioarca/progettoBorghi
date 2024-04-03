const express = require("express");
const Borgo = require("../../models/borgo.model.js");
const router = express.Router();
const {
  createBorgo,
  getBorgo,
  getBorghi,
  updateBorgo,
  deleteBorgo,
} = require("../../controller/borgo.controller.js");

router.post("/", createBorgo);
router.get("/:id", getBorgo);
router.get("/", getBorghi);
router.put("/:id", updateBorgo);
router.delete("/:id", deleteBorgo);

module.exports = router;
