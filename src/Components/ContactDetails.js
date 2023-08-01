import React from "react";
import { useParams } from "react-router-dom";

const ContactDetails = ({ contacts }) => {
  console.log(contacts);
  const { id } = useParams();
  const contact = contacts.find((item) => item.id === parseInt(id, 10));
  const { name, email, contactNumber } = contact;
  if (!contact) {
    return <div>Item not found!</div>;
  }
  return (
    <div className="main">
      <div className="ui card centered">
        <div style={circularDivStyle}>{name[0]}</div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="desciption">{email}</div>
          <div className="desciption">{contactNumber}</div>
        </div>
      </div>
      <div className="center-div">
        <button className="ui button blue centered">Back to list</button>
      </div>
    </div>
  );
};

const circularDivStyle = {
  width: "50px",
  height: "50px",
  backgroundColor: "#f0f0f0",
  borderRadius: "25px",
};

export default ContactDetails;
