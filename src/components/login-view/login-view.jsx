import React, { useState } from "react";
import PropTypes from 'prop-types'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "./login-view.scss";

export function LoginView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://klaus-movie-api.herokuapp.com/login', {
      Username: username,
      Password: password
    })
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
    })
    .catch(e => {
      console.log('No such user')
    });
  };




  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label as="h2">Username:</Form.Label>
        <Form.Control size="lg" type="text" placeholder="..." onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label as="h2" >Password:</Form.Label>
        
        <Form.Control size="lg" type="password"  placeholder="..." value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="outline-dark" size="lg" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  )
}
LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
  }).isRequired,
  onLoggedIn: PropTypes.func.isRequired
};

