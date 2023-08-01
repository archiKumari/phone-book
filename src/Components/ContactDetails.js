import React from "react";
import { Link, useParams } from "react-router-dom";

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
      <div style={{borderRadius:'20px'}} className="ui card centered">
        <div style={{width:'70px',height:'70px', backgroundColor:'grey'}}>{name[0]}</div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="desciption">{email}</div>
          <div className="desciption">{contactNumber}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
        <button className="ui button blue centered">Back to list</button>
        </Link>
      </div>
    </div>
  );
};


export default ContactDetails;
