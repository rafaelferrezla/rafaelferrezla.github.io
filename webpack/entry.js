import React, { Component } from 'react';
import {render} from 'react-dom';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <Welcome />
    )
  }
}

render(<App />, document.getElementById('root'));