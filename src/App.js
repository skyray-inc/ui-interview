import React from "react";
import "./App.css";
import mockData from "./mock-data";

function App() {
  return (
    <div className="App">
      <h1>Logichub App</h1>
      There are {mockData.events.length} events that needs to be listed
    </div>
  );
}

export default App;
