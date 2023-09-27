import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', mobile: '123-456-7890' },
    { id: 2, name: 'Jane Smith', mobile: '987-654-3210' },
    { id: 3, name: 'Jon Snow', mobile: '321-476-6990' },
    { id: 4, name: 'Clarke Griffin', mobile: '325-756-7960' },
    { id: 5, name: 'Tony Stark', mobile: '326-987-1125' },
    { id: 6, name: 'Ned Stark', mobile: '189-452-1230' },
    // Add more sample contacts here
  ]);

  const [isEditing, setEditing] = useState(false); // State to control editing mode
  const [editContact, setEditContact] = useState(null); // State to store the contact being edited

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleEditClick = (contactId) => {
    // Find the contact by ID
    const contactToEdit = contacts.find((contact) => contact.id === contactId);

    // Open the editing form by setting state
    setEditing(true);
    setEditContact(contactToEdit);
  };

  const handleSaveEdit = (editedContact) => {
    // Find the index of the edited contact
    const index = contacts.findIndex((contact) => contact.id === editedContact.id);

    // Create a new contacts array with the edited contact
    const updatedContacts = [...contacts];
    updatedContacts[index] = editedContact;

    // Update the state and close the editing form
    setContacts(updatedContacts);
    setEditing(false);
  };

  const handleDeleteClick = (contactId) => {
    // Filter out the contact with the given ID and update the state
    const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(updatedContacts);

    console.log(`Delete contact with ID: ${contactId}`);
  };

  return (
    <div className="App">
      <h1>Contact List App</h1>
      <AddContact addContact={addContact} />
      <ContactList
        contacts={contacts}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
      {isEditing && (
        <EditContactModal
          contact={editContact}
          onSave={handleSaveEdit}
          onClose={() => setEditing(false)}
        />
      )}
    </div>
  );
}

// EditContactModal component for editing contact details
function EditContactModal({ contact, onSave, onClose }) {
  const [name, setName] = useState(contact.name);
  const [mobile, setMobile] = useState(contact.mobile);

  const handleSave = () => {
    onSave({ ...contact, name, mobile });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Contact</h2>
        <label htmlFor="editName">Name:</label>
        <input
          type="text"
          id="editName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="edit-contact-input"
        />
        <label htmlFor="editMobile">Mobile:</label>
        <input
          type="text"
          id="editMobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="edit-contact-input"
        />
        <div className="modal-buttons">
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
