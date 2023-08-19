import React, { useEffect,useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { Segment, Button, Icon } from "semantic-ui-react";
import { HOST } from "../Constant";

const ContactDetails = () => {

  const [contact,setContact] = useState({name:"ABCD",contactNumber:"12345",email:"abcd@gmail.com",id:"0"});

  const { id } = useParams();
  async function fetchContactDetails() {
    try {
      const response = await fetch(HOST + `api/contacts/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } else {
        const fetchedData = await response.json();
        console.log(fetchedData);
        setContact(fetchedData);
      }
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  useEffect(() => {
    fetchContactDetails();
  },[]);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/contact/${contact.id}/edit`, { state: { contact } });
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Segment.Group>
        <Segment>
          <div style={{ fontSize: "35px", fontWeight: "bold" }}>
            Contact Details
          </div>
        </Segment>
        <Segment>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "80%",
              color: "black",
              fontSize: "35px",
            }}
          >
            <div
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "5%",
                backgroundColor: "teal",
                color: "white",
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "25px",
              }}
            >
              {contact.name[0].toUpperCase()}
            </div>
            {contact.name}
          </div>
        </Segment>
        <Segment.Group>
          <Segment.Group horizontal>
            <Segment>Email ID</Segment>
            <Segment>{contact.email}</Segment>
            <Segment></Segment>
          </Segment.Group>
          <Segment.Group horizontal>
            <Segment>Contact Number</Segment>
            <Segment>{contact.contactNumber}</Segment>
            <Segment></Segment>
          </Segment.Group>
        </Segment.Group>
      </Segment.Group>
      <div
        style={{
          position: "fixed",
          bottom: "40px",
          right: "40px",
          zIndex: 999,
        }}
      >
        <Button circular animated="fade" color="teal" onClick={handleNavigate}>
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
            <Button.Content hidden>Edit</Button.Content>
            <Button.Content visible>
              <Icon name="pencil" />
            </Button.Content>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ContactDetails;
