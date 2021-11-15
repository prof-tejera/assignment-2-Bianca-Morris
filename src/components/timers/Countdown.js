import React, { useContext } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../../context/AppProvider";
import { useInterval } from "../../utils/customReactHooks";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";



const Countdown = (props) => {
  const { handleStop, handleStart, handleReset } = props;
  const {
    hours,
    setHours,
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    isTimerRunning,
    startTime,
    setStartTime
  } = useContext(AppContext);

  const { 0: startHours, 1: startMinutes, 2: startSeconds } = startTime || [];

  const handleSetStartTime = (e) => {
    const { target: { value, name } = {} } = e || {};
    const valInt = parseInt(value || 0);
    switch(name) {
      case "hourInput":
        setStartTime([valInt, startMinutes, startSeconds]);
        break;
      case "minuteInput":
        setStartTime([startHours, valInt, startSeconds]);
        break;
      case "secondInput":
        setStartTime([startHours, startMinutes, valInt]);
        break;
      default:
        throw new Error("Attempting to handle time change for unrecognized input.");
    }   
  }

  function countdown() {
    if (!hours && !minutes && !seconds) {
      handleStop();
    } else if (!minutes && !seconds) {
      setHours(hours - 1);
      setMinutes(59);
      setSeconds(59);
    } else if (!seconds) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else {
      setSeconds(seconds - 1);
    }
  }

  useInterval(() => {
    countdown();
  }, isTimerRunning ? 1000 : null);

  return (
    <React.Fragment>
      <H1>Countdown</H1>
      <DisplayTime {...{ hours, minutes, seconds }} />
      <TimeInputLabel>
        Start Time:
        <TimeInput disabled={isTimerRunning} hoursVal={startHours} minutesVal={startMinutes} secondsVal={startSeconds} onChange={handleSetStartTime} />
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
  handleStop: PropTypes.func,
  handleStart: PropTypes.func,
  handleReset: PropTypes.func,
}

export default Countdown;
