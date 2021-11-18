import React, { useState } from 'react';
import useSound from 'use-sound';

import timerEndSound from '../sfx/alarm.wav';
import restStartSound from '../sfx/restStart.wav';
import roundEndSound from '../sfx/roundEnd.wav';

export const AppContext = React.createContext({});

const emptyTimer = ["", "", ""]; // [Hours, Minutes, Seconds]

const AppProvider = ({ children }) => {
  // State shared across all timers
  const [ timer, setTimer ] = useState(emptyTimer);
  const [ timerIdx, setTimerIdx ] = useState(0); // Timer array specified in TimersView.js
  const [ isTimerRunning, setTimerRunning ] = useState(false);
  const [ isIncrementing, setIsIncrementing ] = useState(true); // if False, is decrementing

  // States specific to certain timers
  const [ startTime, setStartTime ] = useState(emptyTimer); // Used in Countdown & XY
  const [ endTime, setEndTime ] = useState(emptyTimer); // Used in Stopwatch
  const [ workTime, setWorkTime ] = useState(emptyTimer); // Used in Tabata
  const [ restTime, setRestTime ] = useState(emptyTimer); // Used in Tabata
  const [ numRounds, setNumRounds ] = useState(1); // Used in Tabata and XY
  const [ currRound, setCurrRound ] = useState(1); // Used in Tabata and XY
  const [ isWorkTime, setIsWorkTime ] = useState(true); // if False, is rest time

  // Sound Hooks
  const [playTimerEnd] = useSound(timerEndSound);
  const [playRoundEnd] = useSound(roundEndSound);
  const [playRestStart] = useSound(restStartSound);

  const { 0: hours, 1: minutes, 2: seconds } = timer || [];

  /* Counting up the seconds from 00:00:00 to endTime */
  const tickUp = () => {
    const { 0: endHours, 1: endMinutes, 2: endSeconds } = endTime || [];
    if (
      (seconds || 0) === (endSeconds || 0) && 
      (minutes || 0) === (endMinutes || 0) &&
      (hours || 0) === (endHours || 0)
    ) {
      timerComplete();
    } else {
      const endOfMinute = seconds === 59;
      const endOfHour = minutes === 59;
      
      if (endOfMinute && endOfHour) { // update hour
        setTimer([(hours || 0) + 1, 0, 0]);
      } else if (endOfMinute) { // update minute
        setTimer([hours, (minutes || 0) + 1, 0]);
      } else { // update second
        setTimer([hours, minutes, (seconds || 0) + 1]);
      }
    }
  }

  /* Counting down the seconds from start time to 00:00:00 */
  const tickDown = (onCompleteCallback) => {
    if (!hours && !minutes && !seconds) {
      onCompleteCallback();
    } else if (!minutes && !seconds) {
      setTimer([(hours - 1), 59, 59]);
    } else if (!seconds) {
      setTimer([hours, (minutes - 1), 59]);
    } else {
      setTimer([hours, minutes, (seconds - 1)]);
    }
  }

  const timerComplete = () => {
    handleStop();
    playTimerEnd();
    // alert('Timer complete!');
  }

  const roundComplete = () => {
    if (currRound !== numRounds) {
      playRoundEnd();
      // start a new round
      setTimer(startTime);
      setCurrRound(currRound + 1);
    } else {
      timerComplete();
    }
  }

  const tabataRoundComplete = () => {
    if (!isWorkTime && (currRound === numRounds)) {
      timerComplete();
    } else {
      if (isWorkTime) {
        playRestStart();
        setTimer(restTime); // update counter with rest time
        setIsWorkTime(false); // convert to rest period
      } else {
        playRoundEnd();
        setTimer(workTime); // update counter with work times
        setIsWorkTime(true); // convert to work period
        setCurrRound(currRound + 1); // start a new round
      }
    }
  }

  // Event Handlers
  const handleSetStartTime = (e) => {
    handleSetTimeInput(e, setStartTime, startTime);
  }

  const handleSetWorkTime = (e) => {
    handleSetTimeInput(e, setWorkTime, workTime);
  }

  const handleSetRestTime = (e) => {
    handleSetTimeInput(e, setRestTime, restTime);
  }

  const handleSetEndTime = (e) => {
    handleSetTimeInput(e, setEndTime, endTime);
  }

  const handleSetTimeInput = (e, callback, time) => {
    const { target: { value, name } = {} } = e || {};
    const { 0: inputHours, 1: inputMinutes, 2: inputSeconds } = time || [];
    const valInt = parseInt(value || 0);
    switch(name) {
      case "hourInput":
        callback([valInt, inputMinutes, inputSeconds]);
        break;
      case "minuteInput":
        callback([inputHours, valInt, inputSeconds]);
        break;
      case "secondInput":
        callback([inputHours, inputMinutes, valInt]);
        break;
      default:
        throw new Error("Attempting to handle time change for unrecognized input.");
    }   
  }

  const handleChangeNumRounds = (num) => {
    const numInt = parseInt(num || 0);
    setNumRounds(numInt);
  }

  const handleStop = (e) => {
    setTimerRunning(false);
  }

  const handleStart = (e) => {
    if (isIncrementing) {
      // specify end time
    } else {
      if (timerIdx !== 3) { // XY or Countdown
        // start at start time
        setTimer(startTime);
      } else { // Tabata
        if (isWorkTime) {
          setTimer(workTime);
        } else {
          setTimer(restTime);
        }
      }
    }
    setTimerRunning(true);
  }

  const handleReset = (e) => {
    handleStop();
    setTimer(emptyTimer);
    setCurrRound(1);
    setIsWorkTime(true);
  }

  return (
    <AppContext.Provider
      value={{
        hours,
        minutes,
        seconds,
        startTime,
        endTime,
        numRounds,
        currRound,
        isTimerRunning,
        setStartTime,
        setEndTime,
        setTimer,
        setNumRounds,
        setCurrRound,
        setTimerRunning,
        handleSetWorkTime,
        handleSetRestTime,
        handleSetStartTime,
        handleSetEndTime,
        handleStop,
        handleStart,
        handleReset,
        tickUp,
        tickDown,
        isIncrementing,
        setIsIncrementing,
        timerIdx,
        setTimerIdx,
        handleChangeNumRounds,
        timerComplete,
        roundComplete,
        tabataRoundComplete,
        isWorkTime,
        workTime,
        restTime,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;