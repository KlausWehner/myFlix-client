import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

import "./movie-view.scss";

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card border="dark" bg="secondary" text="white">
        <Card.Img variant="top" src={movie.ImageURL} />
        <Card.Body>
          <Card.Title as="h1">{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>

          <Button
            variant="outline-dark"
            size="lg"
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back
          </Button>

          <Link to={`/Director/${movie.Director.name}`}>
            <Button variant="outline-dark" size="lg">
              Director
            </Button>
          </Link>

          <Link to={`/Genre/${movie.Genre.name}`}>
            <Button variant="outline-dark" size="lg">
              Genre
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    ImageURL: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Director: PropTypes.string,
    Genre: PropTypes.string,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
