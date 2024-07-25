"use client"

import { useState } from "react";
import { InputCustom } from "@/components/input";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (newValue) => {
    setEmail(newValue);
    console.log("Value received from InputCustom:", newValue);
  };

  const handlePasswordChange = (newValue) => {
    setPassword(newValue);
    console.log("Value received from InputCustom:", newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const apiUrl = `/api/auth?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`; // Construct the URL
  
    try {
      const response = await fetch(apiUrl, { method: 'GET' });
      const data = await response.json();
    if (response.ok) {
        console.log("Successfully logged in:", data);
        alert("Successfully logged in");
      } else {
        console.error("Failed to login:", data);
        alert("Failed to login");
      }
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  return (
    <div >
      <InputCustom
        topLeftLabel="Email"
        bottomLeftLabel="Bottom Left"
        bottomRightLabel="Bottom Right"
        onValueChange={handleEmailChange} // Pass the callback function as a prop
      />
       <InputCustom
        topLeftLabel="Password"
        topRightLabel="Top Right"
        bottomLeftLabel="Bottom Left"
        bottomRightLabel="Bottom Right"
        onValueChange={handlePasswordChange} // Pass the callback function as a prop
      />
      {/* Optionally display the value */}
      <p>Value: {email} {password}</p>
      <button  className="btn btn-neutral" onClick={handleSubmit}>Login</button>
    </div>
  );
}