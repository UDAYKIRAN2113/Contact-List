import React from 'react';

const ContactList = ({ contacts, handleEditClick, handleDeleteClick }) => {
  return (
    <div className="contact-list-container">
      <h2>Contact List</h2>
      <ul className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <div className="contact-display">
              <span>{contact.name} - {contact.mobile}</span>
              <div className="contact-buttons">
                <button
                  onClick={() => handleEditClick(contact.id)}
                  className="contact-edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(contact.id)}
                  className="contact-delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
