import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import ContactDetails from "./Components/ContactDetails";
import EditContact from "./Components/EditContact";

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

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem(localStorageKey);
  //   setContacts(savedContacts ? JSON.parse(savedContacts) : []);
  // }, []);

  return (
    <div className="ui container">
      <Router>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/contact/:id"
            element={<ContactDetails contacts={contacts} />}
          />
          <Route path="/contact/:id/edit" element={<EditContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
