import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Label } from "semantic-ui-react";
import { HOST } from "../Constant";

const AddContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    imageUrl: "",
    category: "",
  });
  const [inputError, setInputError] = useState({
    name: false,
    contact: false,
  });

  const navigate = useNavigate();

  const categoryOptions = [
    { key: "friends", text: "Friends", value: "Friends" },
    { key: "family", text: "Family", value: "Family" },
    { key: "work", text: "Work", value: "Work" },
    { key: "others", text: "Others", value: "Others" },
  ];

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
      newContactHandler({ ...formData });
      setFormData({ name: "", contactNumber: "", email: "" });
      navigate("/");
    }
  };

  const newContactHandler = async (contact) => {
    try {
      const response = await fetch(HOST + `api/contacts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <p
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          color: "rgba(0, 128, 129, 0.7)",
        }}
      >
        Add New Contact
      </p>
      <Form onSubmit={saveDataHandler}>
        <Form.Field required error={inputError.name}>
          <label> Name</label>
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
          <label> Contact</label>
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
          <label> Email</label>
          <input
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label> Image url</label>
          <input
            placeholder="Image url"
            name="Image url"
            value={formData.imageUrl}
            onChange={changeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <Form.Select
            name="category"
            options={categoryOptions}
            value={formData.category}
            onChange={changeHandler}
            placeholder="Select category"
          />
        </Form.Field>
        <div style={{ display: "flex" }}>
          <Button primary color="teal" type="submit">
            Submit
          </Button>
          <div style={{ padding: "10px" }}></div>
          <Button onClick={() => navigate("/")}>Cancel</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddContact;
