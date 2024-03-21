import React from "react";

import './ContactCard.css'

const ContactCard = ({ contact, onCardClick}) => {
  const { name, email, phone } = contact;
  function handleClick() {
    console.log("Card Clicked!!");
    onCardClick(contact);
  }

  return (
    <div className="card-container" onClick={handleClick}>
      <div className="top-segment">
        <div className="avatar">{name[0].toUpperCase()}</div> {/*image */}
        <div>
        <p className="top-segment-text">{name}</p> {/*name */}
        </div>
      </div>
      <div className="bottom-segment">
        <p className="bottom-segment-text">{phone}</p> {/*phone */}
        <p className="bottom-segment-text">{email}</p> {/*email */}
      </div>
    </div>
  );
};

export default ContactCard;
