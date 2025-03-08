const express = require("express");
const router = express.Router();
const {
  getAllContacts,
    getAContact,
  createContact,
  updateContact,
  deleteContact
} = require("../controllers/contactController.js")
router.route("/").get(getAllContacts).post(createContact);
router.route("/:id").get(getAContact).put(updateContact).delete(deleteContact);

module.exports = router;
