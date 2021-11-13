import React from "react";
import PropTypes from "prop-types";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds, { RoundsLabel } from "../generic/DisplayRounds";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";
import Input from "../generic/Input";


const XY = (props) => {
  const { onStart, onReset, onInputStartTime, onInputRounds } = props;
  return (
    <React.Fragment>
      <H1>XY</H1>
      <DisplayRounds />
      <DisplayTime />
      <TimeInputLabel>
        Start Time:
        <TimeInput onChange={onInputStartTime}/>
      </TimeInputLabel>
      <RoundsLabel>
        # of Rounds:
        <Input name="numRoundsXY" placeholder="1" onChange={onInputRounds}/>
      </RoundsLabel>
      <ButtonSpacer>
        <Button onClick={onStart}>START</Button>
        <Button onClick={onReset} variant="secondary">RESET</Button>
      </ButtonSpacer>
    </React.Fragment>
  );
}
XY.propTypes = {
  onInputStartTime: PropTypes.func,
  onInputRounds: PropTypes.func,
  onStart: PropTypes.func,
  onReset: PropTypes.func,
}

export default XY;
