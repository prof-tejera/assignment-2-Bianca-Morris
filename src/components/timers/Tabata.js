import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { AppContext } from "../../context/AppProvider";
import { useInterval } from "../../utils/customReactHooks";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds, { RoundsLabel } from "../generic/DisplayRounds";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";
import Input from "../generic/Input";

const LessMarginH1 = styled(H1)`
  margin: 5px;
`;

const Tabata = (props) => {
  const {
    hours,
    minutes,
    seconds,
    isTimerRunning,
    isWorkTime,
    workTime,
    handleSetWorkTime,
    restTime,
    handleSetRestTime,
    tickDown,
    handleStop,
    handleStart,
    handleReset,
    setIsIncrementing,
    numRounds,
    handleChangeNumRounds,
    currRound,
    tabataRoundComplete
  } = useContext(AppContext);

  const { 0: workHours, 1: workMinutes, 2: workSeconds } = workTime || [];
  const { 0: restHours, 1: restMinutes, 2: restSeconds } = restTime || [];

  useInterval(() => {
    tickDown(tabataRoundComplete);
  }, isTimerRunning ? 1000 : null);

  // On mount, ensure timer is set to decrement/tick down from startTime
  useEffect(() => { setIsIncrementing(false); }, [setIsIncrementing]);


  return (
    <React.Fragment>
      <LessMarginH1>Tabata</LessMarginH1>
      <DisplayRounds {...{ currRound }} totalRounds={numRounds} isRest={!isWorkTime}/>
      <DisplayTime {...{ hours, minutes, seconds }}/>
      <TimeInputLabel>
        Work Time:
        <TimeInput disabled={isTimerRunning} onChange={handleSetWorkTime} hoursVal={workHours} minutesVal={workMinutes} secondsVal={workSeconds} />
      </TimeInputLabel>
      <TimeInputLabel>
        Rest Time:
        <TimeInput disabled={isTimerRunning} onChange={handleSetRestTime} hoursVal={restHours} minutesVal={restMinutes} secondsVal={restSeconds}/>
      </TimeInputLabel>
      <RoundsLabel>
        # of Rounds:
        <Input disabled={isTimerRunning} name="numRoundsTabata" value={numRounds} placeholder="1" onChange={handleChangeNumRounds}/>
      </RoundsLabel>
      <ButtonSpacer>
      { isTimerRunning ?
          <Button onClick={handleStop} variant="danger">STOP</Button>:
          <Button onClick={handleStart} disabled={numRounds <= 0}>START</Button>
        }
        <Button onClick={handleReset} variant="secondary">RESET</Button>
      </ButtonSpacer>
    </React.Fragment>
  );
}
Tabata.propTypes = {
  onInputRestTime: PropTypes.func,
  onInputStartTime: PropTypes.func,
  onInputRounds: PropTypes.func,
  onStart: PropTypes.func,
  onReset: PropTypes.func,
}

export default Tabata;
