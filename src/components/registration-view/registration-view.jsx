import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./registration-view.scss";

import { Link } from "react-router-dom";

export function RegistrationView(props) {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://klaus-movie-api.herokuapp.com/users", {
        Username: Username,
        Password: Password,
        Email: Email,
        Birthday: Birthday,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        window.open("/", "_self");
      })
      .catch((e) => {
        console.log("Error when registering the user");
      });
  };

  return (
    <form>
      <Form.Group bg="secondary" controlId="formUsername">
        <Form.Label as="h2">Set your username:</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Minimum lenght is 5 characters."
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group bg="secondary" controlId="formPassword">
        <Form.Label as="h2">Set your password:</Form.Label>
        <Form.Control
          size="lg"
          type="password"
          placeholder="Minimum lenght is 5 characters."
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
          type="date" // is this right??
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

      <Link to={`/`}>
        <Button
          className="m-1"
          variant="outline-dark"
          size="lg"
          type="submit"
          // onClick={props.goToRegistration}
        >
          Already registered? Log in here!
        </Button>{" "}
      </Link>
    </form>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birtday: PropTypes.date,
  }),
};
