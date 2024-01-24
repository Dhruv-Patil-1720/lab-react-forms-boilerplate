import React, { useState } from 'react';
import "./Forms.css"

const Forms = () => {
  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: ""
  };

  const alertState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: ""
  };

  const focusState = {
    firstName: false,
    lastName: false,
    email: false,
    phoneNum: false
  };

  const [Formdata, setFormdata] = useState(initState);
  const [alert, setAlert] = useState(alertState);
  const [focus, setFocus] = useState(focusState);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleFocus(fieldName) {
    setFocus((prevFocus) => ({ ...focusState, [fieldName]: true }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    let messageBox = {};

    // Validate each field and set appropriate error messages
    if (Formdata.firstName === "") {
      messageBox.firstName = "Please Enter your First Name";
    } else {
      messageBox.firstName = "";
    }

    if (Formdata.lastName === "") {
      messageBox.lastName = "Please Enter your Last Name";
    } else {
      messageBox.lastName = "";
    }

    if (Formdata.email === "") {
      messageBox.email = "Please Enter your Email";
    } else {
      messageBox.email = "";
    }

    if (Formdata.phoneNum === "") {
      messageBox.phoneNum = "Please Enter your Phone Number";
    } else {
      messageBox.phoneNum = "";
    }

    // Check if all fields are filled to set registration success
    if (
      messageBox.firstName === "" &&
      messageBox.lastName === "" &&
      messageBox.email === "" &&
      messageBox.phoneNum === ""
    ) {
      setRegistrationSuccess(true);
    }

    // Set the alert state based on the validation messages
    setAlert(messageBox);
  }

  return (
    <div className='container'>
      <form className="contact" onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="firstName"
            value={Formdata.firstName}
            onChange={handleChange}
            onFocus={() => handleFocus("firstName")}
            placeholder="Enter Your First Name"
            style={{ borderColor: focus.firstName ? "blue" : "#ccc" }}
          />
          <div className='alert'>{alert.firstName}</div>
        </label>
        <label htmlFor="">
          <input
            type="text"
            name="lastName"
            value={Formdata.lastName}
            onChange={handleChange}
            onFocus={() => handleFocus("lastName")}
            placeholder="Enter Your Last Name"
            style={{ borderColor: focus.lastName ? "blue" : "#ccc" }}
          />
          <div className='alert'>{alert.lastName}</div>
        </label>
        <label htmlFor="">
          <input
            type="email"
            name="email"
            value={Formdata.email}
            onChange={handleChange}
            onFocus={() => handleFocus("email")}
            placeholder="Enter Your Email"
            style={{ borderColor: focus.email ? "blue" : "#ccc" }}
          />
          <div className='alert'>{alert.email}</div>
        </label>
        <label htmlFor="">
          <input
            type="number"
            name="phoneNum"
            value={Formdata.phoneNum}
            onChange={handleChange}
            onFocus={() => handleFocus("phoneNum")}
            placeholder="Enter Your Phone Number"
            style={{ borderColor: focus.phoneNum ? "blue" : "#ccc" }}
          />
          <div className='alert'>{alert.phoneNum}</div>
        </label>

        <button type="submit">Submit</button>
      </form>

      {registrationSuccess && (
        <div style={{ color: 'green', textAlign:"center",marginTop:"20px", }}>Registration Successful!</div>
      )}
    </div>
  );
};

export default Forms;
