import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.css";
const FirstPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    // Save to local storage
    localStorage.setItem("userDetails", JSON.stringify(formData));
    // Redirect to the second page
    navigate("/second-page");
  };

  return (
    <div className="container-fluid firstPage">
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <Button onClick={handleFormSubmit}>Submit</Button>
    </div>
  );
};

export default FirstPage;
