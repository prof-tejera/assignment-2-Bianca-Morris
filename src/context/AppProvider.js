import React, { useState } from 'react';

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [ timerIdx, setTimerIdx ] = useState(0); // Timer array specified in TimersView.js
  const [startTime, setStartTime] = useState(["", "", ""]); // [hours/minutes/seconds]
  const [endTime, setendTime] = useState(["", "", ""]);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [numRounds, setNumRounds] = useState(1);
  const [currRound, setCurrRound] = useState(0);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [isIncrementing, setIsIncrementing] = useState(true);

  const { 0: startHours, 1: startMinutes, 2: startSeconds } = startTime || [];

  /* Counting up the seconds from 00:00:00 to endTime */
  const tickUp = () => {
    if (seconds === 59) {
      setSeconds(0);
      setMinutes((minutes || 0) + 1);
    } else if (minutes === 59) {
      setMinutes(0);
      setHours((hours || 0) + 1);
    } else {
      setSeconds((seconds || 0) + 1);
    }
  }

  /* Counting down the seconds from start time to 00:00:00 */
  const tickDown = () => {
    if (!hours && !minutes && !seconds) {
      // complete! needs a special method for this
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

  const handleStop = (e) => {
    setTimerRunning(false);
  }

  const handleStart = (e) => {
    if (isIncrementing) {
      // specify end time
    } else {
      // start at start time
      setHours(startHours);
      setMinutes(startMinutes);
      setSeconds(startSeconds);
    }
    setTimerRunning(true);
  }

  const handleReset = (e) => {
    handleStop();
    setHours("");
    setMinutes("");
    setSeconds("");
  }

  // // Event-handler versions of the various setters for passing into timers
  // const handleSetHours = (e) => {
  //   setHours(parseInt(e.target.value || 0));
  // }

  // const handleSetMinutes = (e) => {
  //   setMinutes(parseInt(e.target.value || 0));
  // }

  // const handleSetSeconds = (e) => {
  //   setSeconds(parseInt(e.target.value || 0));
  // }
  


  return (
    <AppContext.Provider
      value={{
        startTime,
        endTime,
        hours,
        minutes,
        seconds,
        numRounds,
        currRound,
        isTimerRunning,
        setStartTime,
        setendTime,
        setHours,
        setMinutes,
        setSeconds,
        setNumRounds,
        setCurrRound,
        setTimerRunning,
        handleSetStartTime,
        handleStop,
        handleStart,
        handleReset,
        tickUp,
        tickDown,
        isIncrementing,
        setIsIncrementing,
        timerIdx,
        setTimerIdx
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;