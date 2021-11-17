import React, { useState } from 'react';

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const emptyTimer = ["", "", ""]; // [Hours, Minutes, Seconds]

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
      if (seconds === 59) {
        setTimer([hours, (minutes || 0) + 1, 0]);
      } else if (minutes === 59) {
        setTimer([(hours || 0) + 1, 0, seconds]);
      } else {
        setTimer([hours, minutes, (seconds || 0) + 1]);
      }
    }
  }

  const timerComplete = () => {
    handleStop();
    // Add music triggers or something here
    alert('Timer complete!');
  }

  const roundComplete = () => {
    if (currRound !== numRounds) {
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
        setTimer(restTime); // update counter with rest time
        setIsWorkTime(false); // convert to rest period
      } else {
        setTimer(workTime); // update counter with work times
        setIsWorkTime(true); // convert to work period
        setCurrRound(currRound + 1); // start a new round
      }
    }
  }

  /* Counting down the seconds from start time to 00:00:00 */
  const tickDown = (onCompleteCallback) => {
    if (!hours && !minutes && !seconds) {
      // console.log("wow it's done", hours, minutes, seconds);
      onCompleteCallback();
    } else if (!minutes && !seconds) {
      // console.log("hour done", hours - 1, 59, 59);
      setTimer([(hours - 1), 59, 59]);
    } else if (!seconds) {
      // console.log("minute done", hours, minutes-1, 59);
      setTimer([hours, (minutes - 1), 59]);
    } else {
      // console.log("second done", hours, minutes, seconds-1);
      setTimer([hours, minutes, (seconds - 1)]);
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
    // console.log("handling start");
    if (isIncrementing) {
      // specify end time
    } else {
      if (timerIdx !== 3) { // XY or Countdown
        // start at start time
        // console.log("startTime", startTime);
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