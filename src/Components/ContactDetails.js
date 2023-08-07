import React from "react";
import { useParams, Link } from "react-router-dom";
import { Segment, Button, Icon } from "semantic-ui-react";
const ContactDetails = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((item) => item.id === parseInt(id, 10));
  const { name, email, contactNumber } = contact;
  if (!contact) {
    return <div>Item not found!</div>;
  }

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
              {name[0].toUpperCase()}
            </div>
            {name}
          </div>
        </Segment>
        <Segment.Group>
          <Segment.Group horizontal>
            <Segment>Email ID</Segment>
            <Segment>{email}</Segment>
            <Segment></Segment>
          </Segment.Group>
          <Segment.Group horizontal>
            <Segment>Contact Number</Segment>
            <Segment>{contactNumber}</Segment>
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
        <Button circular animated="fade" color="teal">
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
            <Link
              to={{
                pathname: `/contact/${contact.id}/edit`,
                state: { contact },
              }}
            >
              <Button.Content hidden>Edit</Button.Content>
              <Button.Content visible>
                <Icon name="pencil" />
              </Button.Content>
            </Link>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ContactDetails;
