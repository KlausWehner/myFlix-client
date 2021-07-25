import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./director-view.scss";

export class DirectorView extends React.Component {
  render() {
    const { director, onBackClick } = this.props;

    return (
      <Card border="dark" bg="secondary" text="white">
        <Card.Body>
          <Card.Title as="h1">{movie.Director.name}</Card.Title>
          <Card.Text>{movie.Director.bio}</Card.Text>

          <Button
            variant="outline-dark"
            size="lg"
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
