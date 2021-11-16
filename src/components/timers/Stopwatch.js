import React, { useContext, useEffect } from "react";

import { AppContext } from "../../context/AppProvider";
import { useInterval } from "../../utils/customReactHooks";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";

const Stopwatch = (props) =>  {
  const {
    hours,
    minutes,
    seconds,
    isTimerRunning,
    tickUp,
    handleStop,
    handleStart,
    handleReset,
    setIsIncrementing,
    endTime,
    handleSetEndTime
  } = useContext(AppContext);

  const { 0: endHours, 1: endMinutes, 2: endSeconds } = endTime || [];
  
  useInterval(() => {
    tickUp();
  }, isTimerRunning ? 1000 : null);

  // On mount, ensure timer is set to increment/tick up from 00:00:00
  useEffect(() => { setIsIncrementing(true);}, [setIsIncrementing]);

  return (
    <React.Fragment>
      <H1>Stopwatch</H1>
      <DisplayTime {...{ hours, minutes, seconds }} />
      <TimeInputLabel>
        End Time:
        <TimeInput disabled={isTimerRunning} hoursVal={endHours} minutesVal={endMinutes} secondsVal={endSeconds} onChange={handleSetEndTime} />
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

export default Stopwatch;
