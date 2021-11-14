import React, { useContext } from "react";
import PropTypes from "prop-types";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";
import { AppContext } from "../../context/AppProvider";



const Countdown = (props) => {
  const { onStart } = props;

  const { hours, setHours, minutes, setMinutes, seconds, setSeconds } = useContext(AppContext);
  
  const updateHours = (e) => {
    console.log("updateHours", e.target.value);
    setHours(e.target.value);
  }

  const updateMinutes = (e) => {
    console.log("updateMinutes", e.target.value);
    setMinutes(e.target.value);
  }

  const updateSeconds = (e) => {
    console.log("updateSeconds", e.target.value);
    setSeconds(e.target.value);
  }

  function onReset (e) {
    console.log("clicked!", e);
    setHours(null);
    setMinutes(null);
    setSeconds(null);
  }

  return (
    <React.Fragment>
      <H1>Countdown</H1>
      <DisplayTime {...{ hours, minutes, seconds}} />
      <TimeInputLabel>
        Start Time:
        <TimeInput hoursVal={hours} minutesVal={minutes} secondsVal={seconds} onChangeHours={updateHours} onChangeMinutes={updateMinutes} onChangeSeconds={updateSeconds} />
      </TimeInputLabel>
      <ButtonSpacer>
        <Button onClick={onStart}>START</Button>
        <Button onClick={onReset} variant="secondary">RESET</Button>
      </ButtonSpacer>
    </React.Fragment>
  );
}
Countdown.propTypes = {
  onStart: PropTypes.func,
}

export default Countdown;
