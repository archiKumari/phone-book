import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import ContactCard from "./ContactCard/ContactCard";
import Modal from "./Modal/Modal";
import CustomButton from "./Button";
import { HOST } from "../Constant";

const ContactList = () => {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function handleEditContact(updatedContact) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/contacts/${updatedContact.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedContact),
        }
      );
      // Update the contact in the local state
      setContacts((prevContacts) =>
        prevContacts.map((c) =>
          c.id === updatedContact.id ? updatedContact : c
        )
      );
      // Close the modal
      setModalOpen(false);
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  }

  async function handleDeleteContact(contactId) {
    try {
      const response = await fetch(
        `http://localhost:3001/api/contacts/${contactId}`,
        {
          method: "DELETE",
        }
      );
      // Remove the contact from the local state
      setContacts((prevContacts) =>
        prevContacts.filter((c) => c.id !== contactId)
      );
      // Close the modal
      setModalOpen(false);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  }

  async function fetchContacts() {
    try {
      const response = await fetch(HOST + `api/contacts/`);
      const data = await response.json();
      setContacts(data);
      console.log("fetched contact data:", data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  }

  function handleContactClick(contact) {
    setSelectedContact(contact);
    setModalOpen(true);
  }

  function handleCloseModal() {
    setSelectedContact(null);
    setModalOpen(false);
  }

  return (
    <div style={{ padding: "30px" }}>
      <p style={{ fontSize: "45px", fontWeight: "bold", color: "teal" }}>
        Contacts List
      </p>
      <Grid columns={3}>
        {contacts.map((contact) => (
          <Grid.Column key={contact.id}>
            <ContactCard contact={contact} onCardClick={handleContactClick} />
          </Grid.Column>
        ))}
      </Grid>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CustomButton
          buttonClick={() => {
            navigate("/add");
          }}
          buttonText="Add"
          icon="add"
        />
        {/* <Button
          circular
          animated="fade"
          color="teal"
          onClick={() => {
            navigate("/add");
          }}
        >
          <div
            style={{
              height: "40px",
              width: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
              paddingLeft: "8px",
              paddingTop: "5px",
            }}
          >
            <Button.Content hidden>Add</Button.Content>
            <Button.Content visible>
              <Icon name="add" />
            </Button.Content>
          </div>
        </Button> */}
        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          contact={selectedContact}
          onEdit={handleEditContact}
          onDelete={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default ContactList;
