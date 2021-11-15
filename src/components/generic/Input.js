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

const Input = (props) => {
    const { type, name, onChange, disabled, placeholder, value, min, max } = props;

    // Adds some additional validation for typed numbers
    const validateChange = (e) => {
        let { target: { value: eventVal, min, max } = {} } = e || {};
        if (type === "number") { // ensure typed numerical values don't overflow min/max or include decimals
            const adjustedValue = (Math.max(Number(min), Math.min(Number(max), Number(eventVal)))).toFixed(0);
            e.target["value"] = adjustedValue;
            onChange(e);
        } else {
            onChange(eventVal);
        }
    };

    return (
        <React.Fragment>
            <HiddenLabel {...{ name }} ></HiddenLabel>
            <StyledInput onChange={validateChange} {...{ name, type, disabled, placeholder, value, min, max }} />
        </React.Fragment>
    );
}
Input.propTypes = {
    name: globalPropTypes.name.isRequired,
    onChange: globalPropTypes.onChange.isRequired,
    disabled: globalPropTypes.disabled,
    placeholder: globalPropTypes.placeholder,
    type: globalPropTypes.inputType,
    value: globalPropTypes.inputValue,
    min: globalPropTypes.min,
    max: globalPropTypes.max,
}
Input.defaultProps = {
    type: "text",
    disabled: false,
    value: "",
    placeholder: "Enter text here..."
}

export default Input;
