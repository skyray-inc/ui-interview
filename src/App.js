import React, { Component } from "react";
import "./App.scss";
import mockData from "./mock-data";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Logichub App</h1>
        There are {mockData.events.length} events that needs to be listed
      </div>
    );
  }
}

export default App;
