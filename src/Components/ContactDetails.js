import React from "react";
import {useParams} from "react-router-dom";
import { Segment } from "semantic-ui-react";
const ContactDetails = ({ contacts }) => {
  console.log(contacts);
  const { id } = useParams();
  const contact = contacts.find((item) => item.id === parseInt(id, 10));
  const { name, email, contactNumber } = contact;
  if (!contact) {
    return <div>Item not found!</div>;
  }

  return (
    <div style={{marginTop:"20px"}}>
    <Segment.Group>
      <Segment><div style={{fontSize:"35px",fontWeight:"bold"}}>Contact Details</div></Segment>
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
  </div>
  );
};

export default ContactDetails;
