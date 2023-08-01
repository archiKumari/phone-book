import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email, contactNumber } = contact;

  return (
    <div className="item">
      <div className="content">
        <Link to={{pathname:`/contact/${id}`,state:{contact}}}>
          <div className="header">{name}</div>
          <div>{email}</div>
          <div>{contactNumber}</div>
          <div>{id}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: 5 }}
        onClick={() => clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
