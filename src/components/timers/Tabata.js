import React from "react";
import styled from "styled-components";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds, { RoundsLabel } from "../generic/DisplayRounds";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";
import Input from "../generic/Input";

const LessMarginH1 = styled(H1)`
  margin: 5px;
`;

class Tabata extends React.Component {
  onStart = () => {
    console.log("Clicked Start!");
  }

  onReset = () => {
    console.log("Clicked Reset!");
  }

  onInputWorkTime = () => {
    console.log("work time");
  }

  onInputRestTime = () => {
    console.log("rest time");
  }

  onInputRounds = () => {
    console.log("rounds");
  }

  render() {
    return (
      <React.Fragment>
        <LessMarginH1>Tabata</LessMarginH1>
        <DisplayRounds currRound={0} totalRounds={1}/>
        <DisplayTime />
        <TimeInputLabel>
          Work Time:
          <TimeInput onChange={this.onInputWorkTime} />
        </TimeInputLabel>
        <TimeInputLabel>
          Rest Time:
          <TimeInput onChange={this.onInputRestTime}/>
        </TimeInputLabel>
        <RoundsLabel>
          # of Rounds:
          <Input name="numRoundsTabata" placeholder="1" onChange={this.onInputRounds}/>
        </RoundsLabel>
        <ButtonSpacer>
          <Button onClick={this.onStart}>START</Button>
          <Button onClick={this.onReset} variant="secondary">RESET</Button>
        </ButtonSpacer>
      </React.Fragment>
    );
  }
}

export default Tabata;
