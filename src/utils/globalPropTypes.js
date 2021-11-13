import PropTypes from "prop-types";

/**
 * A centralized collection of all of the prop types used across
 * the project. Will evolve as more features are added and things change;
 * these are rough estimates of the types needed.
 */

export const globalPropTypes = {
    // Styling Props
    variant: PropTypes.oneOf(["primary", "secondary", "danger"]),

    // HTML Attributes
    buttonType: PropTypes.oneOf(["button", "submit", "reset"]),
    disabled: PropTypes.bool,
    inputType: PropTypes.oneOf(["text", "number", "submit"]),
    inputValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    placeholder: PropTypes.string,
    name: PropTypes.string,
    
    // React Props
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),

    // Event Handlers
    onClick: PropTypes.func,
    onChange: PropTypes.func,

    // Timer-Specific Props
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
    totalRounds: PropTypes.number,
    currRound: PropTypes.number,
    isRest: PropTypes.bool,

};