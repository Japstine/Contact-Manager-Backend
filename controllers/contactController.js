const asyncHandler = require("express-async-handler");
// GET all the contacts
// To avoid using the try catch we use the asyncHandler
const getAllContacts = asyncHandler(async (req, res) => {
  console.log("The request body is: ", req.body);
  res.status(200).json({ message: "Get all contacts" });
});

// GET a contact
const getAContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact: ${req.param.id}` });
});

// POST for creating contact
const createContact = asyncHandler(async (req, res) => {

  console.log("The request body is: ", req.body);
  const {name, email, phone} = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }

  res.status(200).json({ message: "Creating contact" });  
});

// PUT for updating a contact  
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updating contact: ${req.params.id}` });
});

// DELETE for deleting a contact 
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleting contact: ${req.params.id}` });
});

module.exports = {getAllContacts, getAContact, createContact, updateContact, deleteContact}
