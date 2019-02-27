import React, { Component } from 'react';
import { Viewer } from '../src/components'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      documento: {
        url : "https://link/to/pdf",
        extensao : "pdf",
      }
    }
  }
  render() {
    const { documento } = this.state

    return (
      <div className="App">
        <Viewer url={documento.url}/>
      </div>
    );
  }
}

export default App;
