import React, { useState } from "react";

const FormComponent = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    isActive: false
  });

  // const onFirstNameChange = (event) => {
  //   setUser({ ...user, firstname: event.target.value });
  // };

  // const onLastNameChange = (event) => {
  //   setUser({ ...user, lastname: event.target.value });
  // };

  // const onEmailChange = (event) => {
  //   setUser({ ...user, email: event.target.value });
  // };

  // const onCheckChange = (event) => {
  //   console.log(event)
  // }

  const onChangeInput = (event, type = "text") => {
    if (type === "check") {
      setUser({ ...user, [event.target.name]: event.target.checked });
    } else {
      setUser({ ...user, [event.target.name]: event.target.value });
    }
  };

  const submit = () => {
    //api call to create data
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="firstname"
          value={user.firstname}
          onChange={(event) => onChangeInput(event)}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          value={user.lastname}
          onChange={(event) => onChangeInput(event)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={(event) => onChangeInput(event)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={(event) => onChangeInput(event)}
        />
        <div>
          <input
            type="checkbox"
            placeholder="Email"
            name="isActive"
            value={user.isActive}
            onChange={(event) => onChangeInput(event, "check")}
          />
          <label htmlFor="email">Active</label>
        </div>
      </form>
      <div>
        <button onClick={submit}>Submit</button>
      </div>
      <div>
        <div>First Name- {user.firstname}</div>
        <div>Last Name- {user.lastname}</div>
        <div>Email- {user.email}</div>
      </div>
    </div>
  );
};

export default FormComponent;
