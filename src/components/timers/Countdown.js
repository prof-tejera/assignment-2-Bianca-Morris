import React from "react";
import PropTypes from "prop-types";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";



const Countdown = (props) => {
  const { onInputStartTime, onStart, onReset } = props;
  return (
    <React.Fragment>
      <H1>Countdown</H1>
      <DisplayTime />
      <TimeInputLabel>
        Start Time:
        <TimeInput onChange={onInputStartTime}/>
      </TimeInputLabel>
      <ButtonSpacer>
        <Button onClick={onStart}>START</Button>
        <Button onClick={onReset} variant="secondary">RESET</Button>
      </ButtonSpacer>
    </React.Fragment>
  );
}
Countdown.propTypes = {
  onInputStartTime: PropTypes.func,
  onStart: PropTypes.func,
  onReset: PropTypes.func,
}

export default Countdown;
