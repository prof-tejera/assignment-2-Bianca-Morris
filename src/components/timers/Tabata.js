import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";
import DisplayRounds, { RoundsLabel } from "../generic/DisplayRounds";
import TimeInput, { TimeInputLabel } from "../generic/TimeInput";
import Input from "../generic/Input";

const LessMarginH1 = styled(H1)`
  margin: 5px;
`;

const Tabata = (props) => {
  const { onInputRestTime, onInputWorkTime, onInputRounds, onStart, onReset } = props;
  return (
    <React.Fragment>
      <LessMarginH1>Tabata</LessMarginH1>
      <DisplayRounds currRound={0} totalRounds={1}/>
      <DisplayTime />
      <TimeInputLabel>
        Work Time:
        <TimeInput onChange={onInputWorkTime} />
      </TimeInputLabel>
      <TimeInputLabel>
        Rest Time:
        <TimeInput onChange={onInputRestTime}/>
      </TimeInputLabel>
      <RoundsLabel>
        # of Rounds:
        <Input name="numRoundsTabata" placeholder="1" onChange={onInputRounds}/>
      </RoundsLabel>
      <ButtonSpacer>
        <Button onClick={onStart}>START</Button>
        <Button onClick={onReset} variant="secondary">RESET</Button>
      </ButtonSpacer>
    </React.Fragment>
  );
}
Tabata.propTypes = {
  onInputRestTime: PropTypes.func,
  onInputStartTime: PropTypes.func,
  onInputRounds: PropTypes.func,
  onStart: PropTypes.func,
  onReset: PropTypes.func,
}

export default Tabata;
