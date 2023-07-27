import React from "react";

const ContactCard = ({contact}) => {
    const {name, email,contactNumber} = contact
    return(
        <div className="item">
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
            <div>{contactNumber}</div>
        </div>
        <i className="trash alternate outline icon" style={{color:'red', marginTop:5}}></i>
    </div>
    )
}

export default ContactCard;