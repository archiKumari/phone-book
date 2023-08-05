import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Label } from "semantic-ui-react";

const AddContact = ({ addContactHandler }) => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    id: 0,
  });
  const [inputError, setInputError] = useState({
    name: false,
    contact: false,
  });

  const navigate = useNavigate();

  // Function to handle form input change
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setInputError({ ...inputError, [name]: false });
  };

  const saveDataHandler = (e) => {
    const newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = true;
    }
    if (formData.contactNumber.trim() === "") {
      newErrors.contact = true;
    }
    if (Object.keys(newErrors).length > 0) {
      setInputError(newErrors);
    } else {
      e.preventDefault();
      const newId = Math.floor(Math.random() * 100) + 1;
      addContactHandler({ ...formData, id: newId });
      setFormData({ name: "", contactNumber: "", email: "" });
      navigate("/");
    }
  };

  return (
    <Form onSubmit={saveDataHandler}>
      <Form.Field required error={inputError.name}>
        <label>Name</label>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={changeHandler}
        />
        {inputError.name && (
          <Label basic color="red" pointing>
            Please enter your name
          </Label>
        )}
      </Form.Field>
      <Form.Field required error={inputError.contact}>
        <label>Contact</label>
        <input
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={changeHandler}
        />
        {inputError.name && (
          <Label basic color="red" pointing>
            Please enter contact number
          </Label>
        )}
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />
      </Form.Field>
      <div style={{display:"flex"}}>
      <Button primary color="teal" type="submit">
        Submit
      </Button>
      <Button onClick={() => navigate("/")}>Cancel</Button>
      </div>
    </Form>
  );
};

export default AddContact;
