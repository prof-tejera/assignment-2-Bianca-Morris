import React, { useState } from 'react';

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [endDate, setEndDate] = useState(new Date());
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);


  return (
    <AppContext.Provider
      value={{
        endDate,
        hours,
        minutes,
        seconds,
        setEndDate,
        setHours,
        setMinutes,
        setSeconds
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;