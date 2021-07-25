import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./registration-view.scss";

export function RegistrationView(props) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Username, Password, Email, Birthday);
  };

  return (
    <form>
      <Form.Group bg="secondary" controlId="formUsername">
        <Form.Label as="h2">Set your username:</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="..."
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group bg="secondary" controlId="formPassword">
        <Form.Label as="h2">Set your password:</Form.Label>
        <Form.Control
          size="lg"
          type="password"
          placeholder="..."
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label as="h2">Your email:</Form.Label>
        <Form.Control
          size="lg"
          type="email"
          placeholder="..."
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="Birthday">
        <Form.Label as="h2">Your birthday:</Form.Label>
        <Form.Control
          size="lg"
          type="date"
          placeholder="..."
          value={Birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </Form.Group>

      <Button
        variant="outline-dark"
        size="lg"
        type="submit"
        onClick={handleSubmit}
      >
        SUBMIT
      </Button>
    </form>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birtday: PropTypes.date,
  }).isRequired,
};
