import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./genre-view.scss";

export class GenreView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card border="dark" bg="secondary" text="white">
        <Card.Body>
          <Card.Title as="h1">{movie.Genre.name}</Card.Title>
          <Card.Text>{movie.Genre.Description}</Card.Text>

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
