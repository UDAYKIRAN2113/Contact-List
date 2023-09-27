import React, { useState } from 'react';

const AddContact = ({ addContact }) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, mobile });
    setName('');
    setMobile('');
    setFormVisible(false);
  };

  return (
    <div className="add-contact-container">
      <button
        className={`add-contact-button ${isFormVisible ? 'cancel' : ''}`}
        onClick={toggleForm}
      >
        {isFormVisible ? 'Cancel' : 'Add Contact'}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="add-contact-form">
          <input
            type="text"
            className="add-contact-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="add-contact-input"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button
            type="submit"
            className="add-contact-submit-button"
          >
            Add Contact
          </button>
        </form>
      )}
    </div>
  );
};

export default AddContact;
