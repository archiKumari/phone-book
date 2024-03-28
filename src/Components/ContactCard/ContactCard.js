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
        <img className="avatar" src={contact.image_source} />
        <div>
          <p className="top-segment-text">{name}</p> 
        </div>
      </div>
      <div className="bottom-segment">
        <p>{phone}</p> 
        <p style={{marginTop:"-10px"}}>{email}</p> 
      </div>
    </div>
  );
};

export default ContactCard;
