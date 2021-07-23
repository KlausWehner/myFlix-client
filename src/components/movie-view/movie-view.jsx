import React from 'react';
import PropTypes from "prop-types";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';


import './movie-view.scss';

export class MovieView extends React.Component {



  render() {
    const { movie, onBackClick } = this.props;

    return (
      <Jumbotron >
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImageURL} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>

        <Button variant="outline-dark" size="lg" onClick={() => { onBackClick(null); }}>Back</Button>

       </div>
       </Jumbotron>
    );
  }
}


MovieView.propTypes = {
  movie: PropTypes.shape({
    ImageURL: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
