import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";

function App() {

  const [contacts, setContacts] = useState([]);
  const localStorageKey = "contacts";

  // Function to handle saving the data to local storage
  const addContactHandler = (newContact) => {
    const allContacts = [...contacts, newContact];
    setContacts(allContacts);
    localStorage.setItem(localStorageKey, JSON.stringify(allContacts));
    console.log("Contacts at Add contact: ", allContacts);
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem(localStorageKey);
    setContacts(savedContacts ? JSON.parse(savedContacts) : []);
    console.log("getting contacts here!", savedContacts);
  }, []);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
