import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import ButtonGroup from "react-bootstrap/ButtonGroup";

import { Link } from "react-router-dom";

import "./movie-view.scss";
import { ButtonGroup } from "react-bootstrap";

export class MovieView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card border="dark" bg="secondary" text="white">
        <Card.Img variant="top" src={movie.imageURL} />
        <Card.Body>
          <Card.Title as="h1">{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>

          <Button
            className="m-1"
            variant="outline-dark"
            size="lg"
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back
          </Button>

          <Link to={`/Director/${movie.Director.name}`}>
            <Button variant="outline-dark" size="lg" className="m-1">
              Director
            </Button>
          </Link>

          <Link to={`/Genre/${movie.Genre.name}`}>
            <Button variant="outline-dark" size="lg" className="m-1">
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
    imageURL: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Director: PropTypes.string,
    Genre: PropTypes.string,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
