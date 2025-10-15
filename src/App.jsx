import React from "react";
import TheaterScene from "./TheaterScene";
import "./TheaterScene.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="app-title">React Theater — Julius Caesar</h1>

        <TheaterScene
          location="The Roman Senate, under torchlight"
          time="March 15, 44 BC — The Ides of March"
          caesarAttire="A white toga trimmed with gold"
          dagger="A silver dagger with a ruby-studded hilt"
        />
      </div>
    );
  }
}
