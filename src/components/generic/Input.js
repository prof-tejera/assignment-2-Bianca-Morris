import React from "react";
import styled from "styled-components";
import { themeColors } from "../../utils/tokensAndTheme";
import { globalPropTypes } from "../../utils/globalPropTypes";

const HiddenLabel = styled.label`display:none;`;

const StyledInput = styled.input`
    background-color: ${themeColors.inputBackground};
    border: none;
    width: 50px;
    padding: 5px;
    border-radius: 3px;
    font-family: SourceCodePro;

    ::placeholder {
        color: ${themeColors.inputPlaceholder};
        font-size: 20px;
    }
`;

class Input extends React.Component {
  render() {
    const { type, name, onChange, disabled, placeholder, value } = this.props;
    return (
        <React.Fragment>
            <HiddenLabel {...{ name }} ></HiddenLabel>
            <StyledInput {...{ name, type, onChange, disabled, placeholder, value }} />
        </React.Fragment>
    );
  }
}
Input.propTypes = {
    name: globalPropTypes.name.isRequired,
    onChange: globalPropTypes.onChange.isRequired,
    disabled: globalPropTypes.disabled,
    placeholder: globalPropTypes.placeholder,
    type: globalPropTypes.inputType,
    value: globalPropTypes.inputValue
}
Input.defaultProps = {
    type: "text",
    disabled: false,
    value: "",
    placeholder: "Enter text here..."
}

export default Input;
