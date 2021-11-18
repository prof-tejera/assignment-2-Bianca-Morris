import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFastForward } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from "../../context/AppProvider";
import Button, { ButtonSpacer } from "../generic/Button";
import { globalPropTypes } from "../../utils/globalPropTypes";


const TimerControls = (props) => {
  const {
    timerComplete,
    isTimerRunning,
    handleStop,
    handleStart,
    handleReset,
  } = useContext(AppContext);

  const { 
    stopDisabled, startDisabled, resetDisabled
  } = props;

  return (
    <>
      <ButtonSpacer>
        { isTimerRunning ?
          <Button onClick={handleStop} variant="danger" disabled={stopDisabled}>STOP</Button>:
          <Button onClick={handleStart} disabled={startDisabled}>START</Button> }
        <Button onClick={handleReset} variant="secondary" disabled={resetDisabled}>RESET</Button>
        { isTimerRunning && 
            <Button onClick={() => { timerComplete(); handleReset()}}>
                <FontAwesomeIcon icon={faFastForward} />
            </Button> }
      </ButtonSpacer>
    </>
  );
}
TimerControls.propTypes = {
    startDisabled: globalPropTypes.disabled,
    stopDisabled: globalPropTypes.disabled,
    resetDisabled: globalPropTypes.disabled
}
TimerControls.defaultProps = {
    startDisabled: false,
    stopDisabled: false,
    resetDisabled: false
}

export default TimerControls;
