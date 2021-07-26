import React from "react";
// import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./director-view.scss";

export class DirectorView extends React.Component {
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Card border="dark" bg="secondary" text="white">
        <Card.Body>
          <Card.Title as="h1">{movie.Director.name}</Card.Title>
          <Card.Text>{movie.Director.Bio}</Card.Text>

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

// DirectorView.propTypes = {
//   Director: PropTypes.shape({
//     movie: PropTypes.string,
//     Director.Bio: PropTypes.string,
//     Director.name: PropTypes.string,

//   }),
//   onBackClick: PropTypes.func.isRequired,
// };
