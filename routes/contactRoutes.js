const express = require("express");
const router = express.Router();
const {
  getAllContacts,
    getAContact,
  createContact,
  updateContact,
  deleteContact
} = require("../controllers/contactController.js")
router.route("/").get(getAllContacts);
router.route("/:id").get(getAContact);
router.route("/").post(createContact);
router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContact);
module.exports = router;
