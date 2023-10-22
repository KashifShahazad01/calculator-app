import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "",
    };
  }

  addToDisplay = (value) => {
    this.setState((prevState) => ({
      display: prevState.display + value,
    }));
  };

  clearDisplay = () => {
    this.setState({
      display: "",
    });
  };

  calculateResult = () => {
    try {
      this.setState({
        display: eval(this.state.display) || "0",
      });
    } catch (error) {
      this.setState({
        display: "Error",
      });
    }
  };

  render() {
    return (
      <div class="conainer">
        <div class="body">
          <h2 class="heading">PUNJAB COLLEGE</h2>
          <input
            className="LCD numbers"
            type="text"
            id="display"
            value={this.state.display}
            readOnly
          />
          <div class="grid">
            <div class="btn__holder ce">
              <button class="btn" onClick={this.clearDisplay}>
                CE
              </button>
            </div>
            <div class="btn__holder ce">
              <button class="btn" onClick={this.clearDisplay}>
                CE
              </button>
            </div>
            <div class="btn__holder ce">
              <button class="btn" onClick={this.clearDisplay}>
                %
              </button>
            </div>
            <div class="btn__holder ce">
              <button class="btn" onClick={() => this.addToDisplay("/")}>
                ÷
              </button>
            </div>
            <div class="btn__holder">
              <button className="btn" onClick={() => this.addToDisplay("1")}>
                1
              </button>
            </div>
            <div class="btn__holder">
              <button className="btn" onClick={() => this.addToDisplay("2")}>
                2
              </button>
            </div>
            <div class="btn__holder">
              <button className="btn" onClick={() => this.addToDisplay("3")}>
                3
              </button>
            </div>
            <div class="btn__holder ce">
              <button class="btn" onClick={() => this.addToDisplay("*")}>
                x
              </button>
            </div>

            <div class="btn__holder">
              <button className="btn" onClick={() => this.addToDisplay("4")}>
                4
              </button>
            </div>
            <div class="btn__holder">
              <button className="btn" onClick={() => this.addToDisplay("5")}>
                5
              </button>
            </div>
            <div class="btn__holder">
              <button className="btn" onClick={() => this.addToDisplay("6")}>
                6
              </button>
            </div>
            <div class="btn__holder dvd">
              <button className="btn" onClick={() => this.addToDisplay("-")}>
                -
              </button>
            </div>
            <div class="btn__holder">
              <button className="btn" onClick={() => this.addToDisplay("7")}>
                7
              </button>
            </div>
            <div class="btn__holder">
              <button className="btn" onClick={() => this.addToDisplay("8")}>
                8
              </button>
            </div>
            <div class="btn__holder">
              <button className="btn" onClick={() => this.addToDisplay("9")}>
                9
              </button>
            </div>
            <div class="btn__holder ce">
              <button class="btn" onClick={() => this.addToDisplay("+")}>
                +
              </button>{" "}
            </div>

            <div class="btn__holder">
              <button className="btn" onClick={() => this.addToDisplay("0")}>
                0
              </button>
            </div>
            <div class="btn__holder point">
              <button class="btn" onClick={() => this.addToDisplay(".")}>
                .
              </button>
            </div>

            <div class="btn__holder btn__long ">
              <button class="btn" onClick={this.calculateResult}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
