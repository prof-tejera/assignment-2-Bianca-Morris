import React, { useState } from 'react';

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [numRounds, setNumRounds] = useState(1);
  const [currRound, setCurrRound] = useState(0);
  const [isTimerRunning, setTimerRunning] = useState(false);


  return (
    <AppContext.Provider
      value={{
        startDate,
        endDate,
        hours,
        minutes,
        seconds,
        numRounds,
        currRound,
        isTimerRunning,
        setStartDate,
        setEndDate,
        setHours,
        setMinutes,
        setSeconds,
        setNumRounds,
        setCurrRound,
        setTimerRunning
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;