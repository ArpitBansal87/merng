import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onSubmit = () => {
    console.log("Inside the onsubmit function");
  };
  const onChange = () => {
    console.log("Inside the form change filed");
  };
  return (
    <div>
      <Form onSubmit={onSubmit} noValidate>
        <h1> Register</h1>
        <Form.Input
          label="Username"
          placeholder="Username..."
          name="username"
          value={values.username}
          onChange={onChange}
        />
      </Form>
    </div>
  );
}

export default Register;
