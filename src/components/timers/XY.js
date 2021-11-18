import React, { useContext, useEffect } from "react";

import { AppContext } from "../../context/AppProvider";
import { useInterval } from "../../utils/customReactHooks";

import { H1 } from "../../utils/tokensAndTheme";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds, { RoundsLabel } from "../generic/DisplayRounds";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";
import Input from "../generic/Input";
import TimerControls from "../generic/TimerControls";


const XY = (props) => {
  const {
    hours,
    minutes,
    seconds,
    isTimerRunning,
    startTime,
    handleSetStartTime,
    tickDown,
    setIsIncrementing,
    numRounds,
    handleChangeNumRounds,
    currRound,
    roundComplete,
    timerHasBeenStarted
  } = useContext(AppContext);

  const { 0: startHours, 1: startMinutes, 2: startSeconds } = startTime || [];

  useInterval(() => {
    tickDown(roundComplete);
  }, isTimerRunning ? 1000 : null);

  // On mount, ensure timer is set to decrement/tick down from startTime
  useEffect(() => { setIsIncrementing(false); }, [setIsIncrementing]);

  const noStartTimeInputted = !startHours && !startMinutes && !startSeconds;
  const invalidRounds = currRound > numRounds;
  const disableStart = noStartTimeInputted || invalidRounds;
  const disableInputs = timerHasBeenStarted || isTimerRunning;

  return (
    <React.Fragment>
      <H1>XY</H1>
      <DisplayRounds {...{ currRound }} totalRounds={numRounds}/>
      <DisplayTime {...{ hours, minutes, seconds }} />
      <TimeInputLabel>
        Start Time:
        <TimeInput disabled={disableInputs} hoursVal={startHours} minutesVal={startMinutes} secondsVal={startSeconds} onChange={handleSetStartTime}/>
      </TimeInputLabel>
      <RoundsLabel>
        # of Rounds:
        <Input name="numRoundsXY" disabled={disableInputs} placeholder="1" onChange={handleChangeNumRounds}/>
      </RoundsLabel>
      <TimerControls startDisabled={disableStart}/>
    </React.Fragment>
  );
}

export default XY;
