// GET all the contacts
const getAllContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

// GET a contact
const getAContact = (req, res) => {
  res.status(200).json({ message: `Get contact: ${req.param.id}` });
};

// POST for creating contact
const createContact = (req, res) => {
  res.status(200).json({ message: "Creating contact" });  
};

// PUT for updating a contact  
const updateContact = (req, res) => {
  res.status(200).json({ message: `Updating contact: ${req.params.id}` });
};

// DELETE for deleting a contact 
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Deleting contact: ${req.params.id}` });
};

module.exports = {getAllContacts, getAContact, createContact, updateContact, deleteContact}
