import React from 'react';
import ReactDOM from 'react-dom';
import  { MainView } from './components/main-view/main-view'; // { variable in jsx }in curly braces because it was exported without the default keyword in “main-view.jsx”. to get rid of the curly braces, simply add default right after export in “main-view.jsx”:

// Import statement to indicate need to bundle 
`./index.scss` // was this parcel-syntax?
import './index.scss';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

// Finds the root of the app ??? defines this comp as root?
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render the app in the root DOM element  ???
ReactDOM.render(React.createElement(MyFlixApplication), container);