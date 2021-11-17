import React, { useContext, useEffect } from "react";

import { AppContext } from "../../context/AppProvider";
import { useInterval } from "../../utils/customReactHooks";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds, { RoundsLabel } from "../generic/DisplayRounds";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";
import Input from "../generic/Input";


const XY = (props) => {
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
    setIsIncrementing,
    numRounds,
    handleChangeNumRounds,
    currRound,
    roundComplete
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

  return (
    <React.Fragment>
      <H1>XY</H1>
      <DisplayRounds {...{ currRound }} totalRounds={numRounds}/>
      <DisplayTime {...{ hours, minutes, seconds }} />
      <TimeInputLabel>
        Start Time:
        <TimeInput disabled={isTimerRunning} hoursVal={startHours} minutesVal={startMinutes} secondsVal={startSeconds} onChange={handleSetStartTime}/>
      </TimeInputLabel>
      <RoundsLabel>
        # of Rounds:
        <Input name="numRoundsXY" value={numRounds} placeholder="1" onChange={handleChangeNumRounds}/>
      </RoundsLabel>
      <ButtonSpacer>
        { isTimerRunning ?
          <Button onClick={handleStop} variant="danger">STOP</Button>:
          <Button onClick={handleStart} disabled={disableStart}>START</Button>
        }
        <Button onClick={handleReset} variant="secondary">RESET</Button>
      </ButtonSpacer>
    </React.Fragment>
  );
}

export default XY;
