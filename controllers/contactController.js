// GET all the contacts
const getAllContacts = (req, res) => {
  console.log("The request body is: ", req.body);
  res.status(200).json({ message: "Get all contacts" });
};

// GET a contact
const getAContact = (req, res) => {
  res.status(200).json({ message: `Get contact: ${req.param.id}` });
};

// POST for creating contact
const createContact = (req, res) => {

  console.log("The request body is: ", req.body);
  const {name, email, phone} = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }

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
