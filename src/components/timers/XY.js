import React from "react";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds, { RoundsLabel } from "../generic/DisplayRounds";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";
import Input from "../generic/Input";


class XY extends React.Component {
  onStart = () => {
    console.log("Clicked Start!");
  }

  onReset = () => {
    console.log("Clicked Reset!");
  }

  onInputStartTime = () => {
    console.log("start time");
  }

  onInputRounds = () => {
    console.log("rounds");
  }

  render() {
    return (
      <React.Fragment>
        <H1>XY</H1>
        <DisplayRounds />
        <DisplayTime />
        <TimeInputLabel>
          Start Time:
          <TimeInput onChange={this.onInputStartTime}/>
        </TimeInputLabel>
        <RoundsLabel>
          # of Rounds:
          <Input name="numRoundsXY" placeholder="1" onChange={this.onInputRounds}/>
        </RoundsLabel>
        <ButtonSpacer>
          <Button onClick={this.onStart}>START</Button>
          <Button onClick={this.onReset} variant="secondary">RESET</Button>
        </ButtonSpacer>
      </React.Fragment>
    );
  }
}

export default XY;
