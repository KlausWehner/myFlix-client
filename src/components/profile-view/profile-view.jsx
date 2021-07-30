import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import "./profile-view.scss";

export class ProfileView extends React.Component {
  constructor() {
    super();
    this.state = {
      Username: null,
      Password: null,
      Email: null,
      Birthday: null,
      Favorites: [],
    };
  }
  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    this.getUser(accessToken);
  }

  getUser(token) {
    let url =
      "https://klaus-movie-api.herokuapp.com/users/" +
      localStorage.getItem("user");
    axios
      .get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.setState({
          Username: response.data.Username,
          Password: response.data.Password,
          Email: response.data.Email,
          Birthday: response.data.Birthday,
          Favorites: response.data.Favorites,
        });
      });
  }

  /* Remove movie from list of Favorites */
  handleRemove(movie) {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    axios
      .post(
        `https://klaus-movie-api.herokuapp.com/users/${user}/favorites/${movie._id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        alert(
          "The title " + movie.Title + " has been removed from your favorites!"
        );
        window.location.reload(false);
      });
  }

  /* Delete user account - works!! */
  handleDelete() {
    const answer = window.confirm(
      "You want to delete your account??  THIS CANNOT BE UNDONE!!"
    );
    if (answer) {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      axios
        .delete(`https://klaus-movie-api.herokuapp.com/users/${user}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          alert(user + " has been deleted!");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          window.location.pathname = "/";
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("User not deleted!");
    }
  }

  // SHOW DETAILS
  render() {
    const { movies, user } = this.props;

    const favoritesList = movies.filter((movie) => {
      // return this.state.Favorites.includes(movie._id);
    });

    return (
      <Container>
        <Row className="main-view justify-content-md-center">
          <Col>
            <h3>Username: {`${this.props.user}`}</h3>
            <p>Email: {`${this.state.Email}`}</p>
            <p>Birthday: {`${this.state.Birthday}`}</p>
            <p className="mt-5">Your Favorites</p>
          </Col>
        </Row>

        {/* // SHOW FAVE MOVIES LIST */}
        <Row>
          {favoritesList.map((movie) => {
            return (
              <Col md={4} key={movie._id}>
                <div key={movie._id}>
                  <Card border="dark" bg="secondary" text="white">
                    <Card.Img variant="top" src={movie.imageUrl} />
                    <Card.Body>
                      <Link to={`/movies/${movie.Title}`}>
                        <Card.Img variant="top" src={movie.imageUrl} />
                        <Card.Title as="h3">{movie.Title}</Card.Title>
                      </Link>

                      {/* Buttons  */}
                      <Button
                        className="m-1"
                        variant="outline-dark"
                        size="lg"
                        onClick={() => this.handleRemove(movie)}
                      >
                        Remove from Favorites
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>

        <Row>
          <Col>
            <Button
              className="m-1"
              variant="outline-dark"
              size="lg"
              onClick={() => this.handleDelete()}
            >
              Delete Account
            </Button>
          </Col>
          <Col>
            <Link to={`/users/${this.props.user}`}>
              <Button className="m-1" variant="outline-dark" size="lg">
                Edit Account
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

ProfileView.propTypes = {
  users: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string,
    Favorites: PropTypes.array,
  }),
  movies: PropTypes.array.isRequired,
};
