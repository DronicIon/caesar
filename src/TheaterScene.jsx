import React from "react";
import Calendar from 'react-calendar';
import "./TheaterScene.css";

export default class TheaterScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      caesar: {
        name: "Gaius Julius Caesar",
        status: "on his way to the Senate",
      },
      log: [],
  ambushActive: false,
  killedActive: false,
  flipped: false,
    };
  }

  handleAmbush = () => {
    this.setState((prev) => ({
      caesar: { ...prev.caesar, status: "ambushed by senators" },
      log: [...prev.log, "Caesar has been ambushed!"],
      ambushActive: true,
    }));
  };

  handleKill = () => {
    this.setState((prev) => ({
      caesar: { ...prev.caesar, status: "has been slain" },
      log: [...prev.log, "Caesar is dead. The state has changed forever."],
    killedActive: true,
    }));
  };

  handleFlip = () => {
    this.setState((prev) => ({
      flipped: !prev.flipped,
      log: [
        ...prev.log,
        !prev.flipped ? "View flipped upside down" : "View restored",
      ],
    }));
  };

  render() {
  const { caesar, log, ambushActive, killedActive, flipped } = this.state;
    const { location, time, caesarAttire, dagger } = this.props;

const today = new Date();

    return (
  <div className={`theater-container${flipped ? " flipped" : ""}`}>
        <h2 className="scene-title">React Theater — Julius Caesar</h2>

  {/* Non-violent animated stage with Caesar and senators */}
        <div
          className={`stage${ambushActive ? " ambush" : ""}${killedActive ? " killed" : ""}`}
          role="img"
          aria-label="Stage with Caesar and senators gently moving"
        >
          <div className="backdrop">
            <div className="curtain left" aria-hidden="true" />
            <div className="curtain right" aria-hidden="true" />
          </div>

          <div className="actors" aria-hidden="true">
            <div className="actor caesar" title="Caesar">
              <div className="actor-body" />
              <span className="label">C</span>
            </div>
            <div className="actor senator s1" title="Senator">
              <div className="actor-body" />
              <span className="label">S</span>
            </div>
            <div className="actor senator s2" title="Senator">
              <div className="actor-body" />
              <span className="label">S</span>
            </div>
            <div className="actor senator s3" title="Senator">
              <div className="actor-body" />
              <span className="label">S</span>
            </div>
            <div className="actor senator s4" title="Senator">
              <div className="actor-body" />
              <span className="label">S</span>
            </div>
          </div>

          <div className="stage-floor" aria-hidden="true" />
        </div>

        <div className="scene-details">
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Caesar’s Attire:</strong> {caesarAttire}</p>
          <p><strong>Weapon:</strong> {dagger}</p>
        </div>

        <hr className="scene-divider" />

        <div className="caesar-info">
          <p><strong>Caesar:</strong> {caesar.name}</p>
          <p><strong>Status:</strong> {caesar.status}</p>
        </div>

        <div className="button-group">
          <button className="btn ambush-btn" onClick={this.handleAmbush}>
            Ambush Caesar
          </button>
          <button className="btn kill-btn" onClick={this.handleKill}>
            Kill Caesar
          </button>
          <button className="btn flip-btn" onClick={this.handleFlip}>
            Flip View
          </button>
        </div>

        <div className="event-log">
          <h4>Event Log</h4>
          <ul>
            {log.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>


        <div>
            <Calendar onChange={()=> {this.setState({ date: today }) }} value={today} />
        </div>

      </div>
    );
  }
}
