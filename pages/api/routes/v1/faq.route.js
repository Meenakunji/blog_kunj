const express = require("express");
const { faqController } = require("../../lib/controllers");
const router = express.Router();

router.route("/list").get(faqController.getFaqList);

module.exports = router;
