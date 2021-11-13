import React from "react";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";

class Stopwatch extends React.Component {
  onStart = () => {
    console.log("Clicked Start!");
  }

  onReset = () => {
    console.log("Clicked Reset!");
  }

  render() {
    return (
      <React.Fragment>
        <H1>Stopwatch</H1>
        <DisplayTime />
        <ButtonSpacer>
          <Button onClick={this.onStart}>START</Button>
          <Button onClick={this.onReset} variant="secondary">RESET</Button>
        </ButtonSpacer>
      </React.Fragment>
    );
  }
}

export default Stopwatch;
