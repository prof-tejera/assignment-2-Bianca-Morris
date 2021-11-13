import React from "react";
import styled from "styled-components";
import { transformTimeUnitToDisplayString } from "../../utils/helpers";
import { globalPropTypes } from "../../utils/globalPropTypes";

const Time = styled.div`
    font-size: 4em;
    font-family: 'SourceCodePro';
`;

class DisplayTime extends React.Component {
  render() {
    const { hours, minutes, seconds } = this.props;
    return (
        <Time>
            {transformTimeUnitToDisplayString(hours, "h")}:
            {transformTimeUnitToDisplayString(minutes, "m")}:
            {transformTimeUnitToDisplayString(seconds, "s")}
        </Time>
    );
  }
}
DisplayTime.propTypes = {
    hours: globalPropTypes.hours,
    minutes: globalPropTypes.minutes,
    seconds: globalPropTypes.seconds
}
DisplayTime.defaultProps = {
    hours: 0,
    minutes: 0,
    seconds: 0,
}

export default DisplayTime;