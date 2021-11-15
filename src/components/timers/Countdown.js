import React, { useContext, useEffect } from "react";

import { AppContext } from "../../context/AppProvider";
import { useInterval } from "../../utils/customReactHooks";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";



const Countdown = (props) => {
  const {
    hours,
    minutes,
    seconds,
    isTimerRunning,
    startTime,
    handleSetStartTime,
    tickDown,
    handleStop,
    handleStart,
    handleReset,
    setIsIncrementing
  } = useContext(AppContext);

  const { 0: startHours, 1: startMinutes, 2: startSeconds } = startTime || [];

  useInterval(() => {
    tickDown();
  }, isTimerRunning ? 1000 : null);

  // On mount, ensure timer is set to decrement/tick down from startTime
  useEffect(() => {
    setIsIncrementing(false);
  }, [setIsIncrementing])

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

export default Countdown;
