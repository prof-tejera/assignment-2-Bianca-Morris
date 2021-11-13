import React from "react";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";



class Countdown extends React.Component {
  onStart = () => {
    console.log("Clicked Start!");
  }

  onReset = () => {
    console.log("Clicked Reset!");
  }

  onInputStartTime = () => {
    console.log("start time");
  }

  render() {
    return (
      <React.Fragment>
        <H1>Countdown</H1>
        <DisplayTime />
        <TimeInputLabel>
          Start Time:
          <TimeInput onChange={this.onInputStartTime}/>
        </TimeInputLabel>
        <ButtonSpacer>
          <Button onClick={this.onStart}>START</Button>
          <Button onClick={this.onReset} variant="secondary">RESET</Button>
        </ButtonSpacer>
      </React.Fragment>
    );
  }
}

export default Countdown;
