import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button, Icon } from "semantic-ui-react";

import ContactCard from "./ContactCard";
import { HOST } from "../Constant";

const ContactList = () => {
  const navigate = useNavigate();

  const [contacts,setContacts] = useState([]);

  async function fetchContacts() {
    try {
      const response = await fetch(HOST + `api/contacts/`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else { 
        const fetchedData = await response.json();
        console.log(fetchedData);
        setContacts(fetchedData);
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  useEffect(() =>{fetchContacts();},[])


  return (
    <div>
      <Grid columns={3}>
        {contacts.map((contact) => (
          <Grid.Column key={contact.id}>
            <ContactCard contact={contact}/>
          </Grid.Column>
        ))}
      </Grid>
      <div style={{ margin: "50px" }}></div>
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
