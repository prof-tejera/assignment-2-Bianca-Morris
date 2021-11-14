import React, { useContext } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../../context/AppProvider";
import { useInterval } from "../../utils/customReactHooks";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import { convertMillisecToSec, convertSecondsToHours, convertSecondsToMinutes } from "../../utils/helpers";

const Stopwatch = (props) =>  {
  const { handleSetHours, handleSetMinutes, handleSetSeconds, handleStop, handleStart, handleReset } = props;
  const { hours, setHours, minutes, setMinutes, seconds, setSeconds, isTimerRunning, startDate } = useContext(AppContext);
  
  function stopwatch() {
    const msElapsed = new Date(Date.now()).getTime() - startDate.getTime();
    const secondsElapsed = convertMillisecToSec(msElapsed);

    if (secondsElapsed < 60) {
      setSeconds(Math.floor(secondsElapsed));
    } else {
      const [hoursElapsed, hourRemainder] = convertSecondsToHours(secondsElapsed);
      const [minutesElapsed, minuteRemainder] = convertSecondsToMinutes(hourRemainder); 
      
      // Update state with seconds, minutes and hours elapsed since start
      setHours(Math.floor(hoursElapsed));
      setMinutes(Math.floor(minutesElapsed));
      setSeconds(Math.floor(minuteRemainder));
    }
  }

  useInterval(() => {
    stopwatch();
  }, isTimerRunning ? 1000 : null);

  return (
    <React.Fragment>
      <H1>Stopwatch</H1>
      <DisplayTime {...{ hours, minutes, seconds}} />
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
Stopwatch.propTypes = {
  handleSetHours: PropTypes.func,
  handleSetMinutes: PropTypes.func,
  handleSetSeconds: PropTypes.func,
  handleStop: PropTypes.func,
  handleStart: PropTypes.func,
  handleReset: PropTypes.func,
}

export default Stopwatch;
