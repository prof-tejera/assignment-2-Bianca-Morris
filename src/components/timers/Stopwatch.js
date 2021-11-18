import React, { useContext, useEffect } from "react";

import { AppContext } from "../../context/AppProvider";
import { useInterval } from "../../utils/customReactHooks";
import { isTimeABeforeTimeB } from "../../utils/helpers";

import { H1 } from "../../utils/tokensAndTheme";
import DisplayTime from "../generic/DisplayTime";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";
import TimerControls from "../generic/TimerControls";

const Stopwatch = (props) =>  {
  const {
    hours,
    minutes,
    seconds,
    isTimerRunning,
    tickUp,
    setIsIncrementing,
    endTime,
    handleSetEndTime,
    timerHasBeenStarted
  } = useContext(AppContext);

  const { 0: endHours, 1: endMinutes, 2: endSeconds } = endTime || [];
  
  useInterval(() => {
    tickUp();
  }, isTimerRunning ? 1000 : null);

  // On mount, ensure timer is set to increment/tick up from 00:00:00
  useEffect(() => { setIsIncrementing(true);}, [setIsIncrementing]);

  const noEndTimeInputted = !endHours && !endMinutes && !endSeconds;
  const endTimeEarlierThanStartTime = isTimeABeforeTimeB(endTime, [hours, minutes, seconds], true);
  const disableStart = noEndTimeInputted || endTimeEarlierThanStartTime;
  const disableInput = isTimerRunning || timerHasBeenStarted;
  const disableResume = !!(hours || 0 === endHours || 0) && !!(minutes || 0 === endMinutes || 0 ) && !!(seconds || 0 === endSeconds || 0);

  return (
    <React.Fragment>
      <H1>Stopwatch</H1>
      <DisplayTime {...{ hours, minutes, seconds }} />
      <TimeInputLabel>
        End Time:
        <TimeInput disabled={disableInput} hoursVal={endHours} minutesVal={endMinutes} secondsVal={endSeconds} onChange={handleSetEndTime} />
      </TimeInputLabel>
      <TimerControls startDisabled={disableStart} resumeDisabled={disableResume} />
    </React.Fragment>
  );
}

export default Stopwatch;
