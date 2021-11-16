import React, { useState } from 'react';

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [ timerIdx, setTimerIdx ] = useState(0); // Timer array specified in TimersView.js
  const [ startTime, setStartTime ] = useState(["", "", ""]); // [hours/minutes/seconds]
  const [ endTime, setEndTime ] = useState(["", "", ""]);
  const [ workTime, setWorkTime ] = useState(["", "", ""]);
  const [ restTime, setRestTime ] = useState(["", "", ""]);
  const [ hours, setHours ] = useState("");
  const [ minutes, setMinutes ] = useState("");
  const [ seconds, setSeconds ] = useState("");
  const [ numRounds, setNumRounds ] = useState(1);
  const [ currRound, setCurrRound ] = useState(1);
  const [ isTimerRunning, setTimerRunning ] = useState(false);
  const [ isIncrementing, setIsIncrementing ] = useState(true); // if False, is decrementing
  const [ isWorkTime, setIsWorkTime ] = useState(true); // if False, is rest time

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

  const timerComplete = () => {
    handleStop();
    // Add music triggers or something here
    alert('Timer complete!');
  }

  const roundComplete = () => {
    if (currRound !== numRounds) {
      // start a new round
      setHours(startHours);
      setMinutes(startMinutes);
      setSeconds(startSeconds);
      setCurrRound(currRound + 1);
    } else {
      timerComplete();
    }
  }

  /* Counting down the seconds from start time to 00:00:00 */
  const tickDown = (onCompleteCallback) => {
    if (!hours && !minutes && !seconds) {
      onCompleteCallback();
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
    handleSetTimeInput(e, setStartTime);
  }

  const handleSetWorkTime = (e) => {
    handleSetTimeInput(e, setWorkTime);
  }

  const handleSetRestTime = (e) => {
    handleSetTimeInput(e, setRestTime);
  }

  const handleSetTimeInput = (e, callback) => {
    const { target: { value, name } = {} } = e || {};
    const valInt = parseInt(value || 0);
    switch(name) {
      case "hourInput":
        callback([valInt, startMinutes, startSeconds]);
        break;
      case "minuteInput":
        callback([startHours, valInt, startSeconds]);
        break;
      case "secondInput":
        callback([startHours, startMinutes, valInt]);
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
    setCurrRound(1);
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
        setEndTime,
        setHours,
        setMinutes,
        setSeconds,
        setNumRounds,
        setCurrRound,
        setTimerRunning,
        handleSetWorkTime,
        handleSetRestTime,
        handleSetStartTime,
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;