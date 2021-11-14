import React, { useState, useContext } from "react";
import styled from "styled-components";

import Panel from "../components/generic/Panel";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import { AppContext } from "../context/AppProvider";

import { themeColors } from "../utils/tokensAndTheme";

const Timers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TimerSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 350px;
  justify-content: center;
  background: linear-gradient(143deg, ${themeColors.timerSelectorGradient1} 0%, ${themeColors.timerSelectorGradient2} 100%);
  overflow: visible;
  border-radius: 20px 0 0 20px;
  padding: 30px;
`;

const TimerTitle = styled.div`
  background-color: ${themeColors.timerSwitchTitle};
  color: ${themeColors.textMedium};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  font-family: SourceCodePro;
`;

const ActiveTimerTitle = styled(TimerTitle)`
  background-color: ${themeColors.timerSwitchTitleActive};
  color: ${themeColors.textLight};
`;

function App() {
  const [ timerIdx, setTimerIdx ] = useState(0);
  const { setHours, setMinutes, setSeconds, setTimerRunning, startDate, setStartDate } = useContext(AppContext);

  // Event-handler versions of the various setters for passing into timers
  const handleSetHours = (e) => {
    setHours(e.target.value);
  }

  const handleSetMinutes = (e) => {
    setMinutes(e.target.value);
  }

  const handleSetSeconds = (e) => {
    setSeconds(e.target.value);
  }

  const handleReset = (e) => {
    setHours("");
    setMinutes("");
    setSeconds("");
  }
  
  const handleStart = (e) => {
    const timeNow = new Date(Date.now());
    setStartDate(timeNow);
    setTimerRunning(true);
  }

  const handleStop = (e) => {
    setTimerRunning(false);
  }

  const timers = [
    { title: "Stopwatch", C: <Stopwatch {...{ handleSetHours, handleSetMinutes, handleSetSeconds, handleReset, handleStart, handleStop }}/> },
    { title: "Countdown", C: <Countdown {...{ handleSetHours, handleSetMinutes, handleSetSeconds, handleReset, handleStart, handleStop }}/> },
    { title: "XY", C: <XY {...{ handleSetHours, handleSetMinutes, handleSetSeconds, handleReset, handleStart, handleStop}} /> },
    { title: "Tabata", C: <Tabata {...{ handleSetHours, handleSetMinutes, handleSetSeconds, handleReset, handleStart, handleStop }}/> },
  ];

  return (
    <Timers>
      <TimerSelector >
      {timers.map((timer, idx) => {
        if (timerIdx === idx) {
          return <ActiveTimerTitle key={timer.title} onClick={() => setTimerIdx(idx)}>{timer.title}</ActiveTimerTitle>;
        }
        return <TimerTitle key={timer.title} onClick={() => setTimerIdx(idx)}>{timer.title}</TimerTitle>;
      })}
      </TimerSelector>
      <Panel>
        {timers[timerIdx].C}
      </Panel>
    </Timers>
  );
}

export default App;
