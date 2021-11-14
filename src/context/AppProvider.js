import React, { useState } from 'react';

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [endDate, setEndDate] = useState(new Date());
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [numRounds, setNumRounds] = useState(1);
  const [currRound, setCurrRound] = useState(0);
  const [isTimerRunning, setTimerRunning] = useState(false);


  return (
    <AppContext.Provider
      value={{
        endDate,
        hours,
        minutes,
        seconds,
        numRounds,
        currRound,
        isTimerRunning,
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