const express = require("express");
const router = express.Router();
const {saveTransaction, notification} = require("../Controller/TransactionController")

router.route("/save").post(saveTransaction);
router.route("/notification").get(notification);

module.exports = router;