import React from "react";
import PropTypes from "prop-types";

import { H1 } from "../../utils/tokensAndTheme";
import Button, { ButtonSpacer } from "../generic/Button";
import DisplayTime from "../generic/DisplayTime";

const Stopwatch = (props) =>  {
  const { onStart, onReset } = props;
  return (
    <React.Fragment>
      <H1>Stopwatch</H1>
      <DisplayTime />
      <ButtonSpacer>
        <Button onClick={onStart}>START</Button>
        <Button onClick={onReset} variant="secondary">RESET</Button>
      </ButtonSpacer>
    </React.Fragment>
  );
}
Stopwatch.propTypes = {
  onStart: PropTypes.func,
  onReset: PropTypes.func,
}

export default Stopwatch;
