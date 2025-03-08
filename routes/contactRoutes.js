const express = require("express");
const router = express.Router();

// GET 
router.route('/').get((req, res) => {
  // JSON format message
  res.status(200).json({ message: "Get all contacts" });
});

// For GETing a single contact
router.route('/:id').get((req, res) => {
  // JSON format message
  res.status(200).json({ message: `Get contact: ${req.params.id}` });
});

// POST for creating contact
router.route('/').post((req, res) => {
  // JSON format message
  res.status(200).json({ message: "Create contact" });
});

// PUT for updating a contact
router.route('/:id').put((req, res) => {
  // JSON format message
  res.status(200).json({ message: `Update contact: ${req.params.id}` });
});

// DELETE for deleting a contact
router.route('/:id').delete((req, res) => {
  // JSON format message
  res.status(200).json({ message: `Delete contact: ${req.params.id}` });
});
module.exports = router;
