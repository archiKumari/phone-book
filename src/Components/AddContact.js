import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
  
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    id: 0,
  });

  const navigate = useNavigate();

  // Function to handle form input change
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const saveDataHandler = (e) => {
    e.preventDefault();
    const newId = Math.floor(Math.random() * 100) + 1;
    addContactHandler({...formData,id: newId});
    setFormData({name:'',contactNumber:'',email:''});
    navigate('/');
  }

  useEffect(() => {}, [])

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={saveDataHandler}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name "
            value={formData.name}
            onChange={changeHandler}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>
        <div className="field">
          <label>Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={changeHandler}
          />
        </div>
        <button className="ui button blue">
          Save
        </button>
      </form>
    </div>
  );
};

export default AddContact;
