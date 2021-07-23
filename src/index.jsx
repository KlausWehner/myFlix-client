import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { MainView } from "./components/main-view/main-view";
import Container from 'react-bootstrap/Container';

import "./index.scss";

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    
    return (
    <Container>
      <MainView />
    </Container>
    );
  }
}

// Finds the root of the app ??? defines this as root?
const container = document.getElementsByClassName("app-container")[0];

// Tells React to render the app in the root DOM element  ???
ReactDOM.render(React.createElement(MyFlixApplication), container);
