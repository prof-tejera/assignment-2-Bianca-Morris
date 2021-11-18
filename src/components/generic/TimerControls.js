import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFastForward, faPlay, faStop, faSync } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from "../../context/AppProvider";
import Button, { ButtonSpacer } from "../generic/Button";
import { globalPropTypes } from "../../utils/globalPropTypes";
import styled from "styled-components";


const ButtonIconHolderRow = styled.div`
    display: flex;
    justify-items: center;
    align-items: center;
    >span {
        font-size: 18px;
    }
    >svg {
        margin-right: 5px;
    }
`;

const TimerControls = (props) => {
  const {
    timerComplete,
    isTimerRunning,
    handleStop,
    handleStart,
    handleReset,
    handleResume,
    timerHasBeenStarted
  } = useContext(AppContext);

  const { 
    stopDisabled, startDisabled, resetDisabled
  } = props;

  if (!isTimerRunning) {
    return (
      <>
        <ButtonSpacer>
            { timerHasBeenStarted &&
                <Button onClick={handleResume} disabled={startDisabled}>
                    <ButtonIconHolderRow>
                        <FontAwesomeIcon icon={faPlay} size="xs"/>
                        <span>RESUME</span>
                    </ButtonIconHolderRow>
                    
                </Button>}
            { !timerHasBeenStarted &&
                <Button onClick={handleStart} disabled={startDisabled}>
                    <ButtonIconHolderRow>
                        <FontAwesomeIcon icon={faPlay} size="xs"/>
                        <span>START</span>
                    </ButtonIconHolderRow>
                </Button>} 
            <Button onClick={handleReset} variant="secondary" disabled={resetDisabled}>
                <ButtonIconHolderRow>
                    <FontAwesomeIcon icon={faSync} size="xs"/>
                    <span>RESET</span>
                </ButtonIconHolderRow>
            </Button>
        </ButtonSpacer>
      </>
    )
  }
  return (
    <>
      <ButtonSpacer>
        { isTimerRunning &&
            <Button onClick={handleStop} variant="danger" disabled={stopDisabled}>
                <ButtonIconHolderRow>
                    <FontAwesomeIcon icon={faStop} size="xs"/>
                    <span>STOP</span>
                </ButtonIconHolderRow>
            </Button>} 
        <Button onClick={handleReset} variant="secondary" disabled={resetDisabled}>
            <ButtonIconHolderRow>
                <FontAwesomeIcon icon={faSync} size="xs"/>
                <span>RESET</span>
            </ButtonIconHolderRow>
        </Button>
        { isTimerRunning && 
            <Button onClick={() => { timerComplete(); handleReset()}}>
                <ButtonIconHolderRow>
                    <FontAwesomeIcon icon={faFastForward} size="xs"/>
                    <span>SKIP</span>
                </ButtonIconHolderRow>
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
