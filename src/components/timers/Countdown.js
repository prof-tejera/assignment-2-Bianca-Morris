import React, { useContext } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../../context/AppProvider";
import { useInterval } from "../../utils/customReactHooks";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";



const Countdown = (props) => {
  const { handleSetHours, handleSetMinutes, handleSetSeconds, handleStop, handleStart, handleReset } = props;
  const { hours, setHours, minutes, setMinutes, seconds, setSeconds, isTimerRunning } = useContext(AppContext);
  
  function countdown() {
    if (seconds) {
      setSeconds(1 + parseInt(seconds));
    } else {
      setSeconds(1);
    }
    
  }

  useInterval(() => {
    countdown();
  }, isTimerRunning ? 1000 : null);

  return (
    <React.Fragment>
      <H1>Countdown</H1>
      <DisplayTime {...{ hours, minutes, seconds}} />
      <TimeInputLabel>
        Start Time:
        <TimeInput disabled={isTimerRunning} hoursVal={hours} minutesVal={minutes} secondsVal={seconds} onChangeHours={handleSetHours} onChangeMinutes={handleSetMinutes} onChangeSeconds={handleSetSeconds} />
      </TimeInputLabel>
      <ButtonSpacer>
        { isTimerRunning ?
          <Button onClick={handleStop} variant="danger">STOP</Button>:
          <Button onClick={handleStart}>START</Button>
        }
        <Button onClick={handleReset} variant="secondary">RESET</Button>
      </ButtonSpacer>
    </React.Fragment>
  );
}
Countdown.propTypes = {
  onStart: PropTypes.func,
  handleSetHours: PropTypes.func,
  handleSetMinutes: PropTypes.func,
  handleSetSeconds: PropTypes.func,
  handleStop: PropTypes.func,
  handleStart: PropTypes.func,
  handleReset: PropTypes.func,
}

export default Countdown;
