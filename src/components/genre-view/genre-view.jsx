import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./genre-view.scss";

export class GenreView extends React.Component {
  render() {
    const { genre, onBackClick } = this.props;

    return (
      <Card border="dark" bg="secondary" text="white">
        <Card.Body>
          <Card.Title as="h1">{movie.Genre}</Card.Title>
          <Card.Text>{movie.Genre}</Card.Text>

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