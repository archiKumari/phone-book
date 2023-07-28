import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({contacts,getContactId}) => {
    const deleteContact = (id) => {
        getContactId(id);
    }
    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContact} key={contact.id}/>
        )
    })
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList;