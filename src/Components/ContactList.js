import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Item, Grid, Button, Icon } from "semantic-ui-react";

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
      {/* Display ContactCard components in a grid */}
      <Grid columns={3}>
        {contacts.map((contact) => (
          <Grid.Column key={contact.id}>
            <ContactCard contact={contact} clickHandler={deleteContact} />
          </Grid.Column>
        ))}
      </Grid>
      <div style={{margin:"20px"}}></div>
      <Button
        icon
        color="teal"
        labelPosition="right"
        onClick={() => {
          navigate("/add");
        }}
      >
        Add New Contact
        <Icon name="add" />
      </Button>
    </div>
  );
};

export default ContactList;
