import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "semantic-ui-react";

import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import ContactDetails from "./Components/ContactDetails";
import EditContact from "./Components/EditContact";

function App() {

  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/contact/:id/edit" element={<EditContact />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
