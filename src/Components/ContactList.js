import React from "react";
import { useNavigate } from "react-router-dom";

import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
  const navigate = useNavigate();

  const deleteContact = (id) => {
    getContactId(id);
  };
  const renderContactList = contacts.map((contact) => {
    return (
        <ContactCard
          contact={contact}
          clickHandler={deleteContact}
          key={contact.id}
        />
    );
  });
  return (
    <div>
      <div className="ui celled list">{renderContactList}</div>
      <button
        className="ui button blue"
        onClick={() => {
          navigate("/add");
        }}
      >
        Add New Contact
      </button>
    </div>
  );
};

export default ContactList;
