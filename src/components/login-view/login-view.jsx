import React, { useState } from "react";
import PropTypes from 'prop-types'; // ??
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

`./login-view.scss`; // is this parcel-syntax?
import "./login-view.scss";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send request to the server for authentication then call
     props.onLoggedIn(username) */
     props.onLoggedIn(username);
  };




  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );

  //<Button></Button> here is a component from the React-Bootstrap package not the same as the vanilla <button></button> JSX element


}
