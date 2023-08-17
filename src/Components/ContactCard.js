import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card } from "semantic-ui-react";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email, contactNumber } = contact;

  const avatartStyle = {
    width: "100%",
    height: "200px",
    backgroundColor: "teal",
    color: "white",
    fontSize: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/contact/${id}`,{state:{contact}});
  }

  return (
    <Card onClick={handleNavigate}>
      <Card.Content>
          <div style={avatartStyle}>{name[0].toUpperCase()}</div>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{email}</Card.Meta>
          <Card.Description>{contactNumber}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default ContactCard;
