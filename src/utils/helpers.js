/**
 * Only one helper function here currently; this will likely expand as I 
 * work on making the timers functional.
 */

/**
 * Does some validation and transforms to 2 digit display string; throws error on invalid
 * @param {Number} number
 * @param {String} timeUnit
 * @returns {String} 2-digit representation of the number
 */
export const transformTimeUnitToDisplayString = (number, timeUnit) =>  {
    if ( // quick validity check
        (number < 0) ||
        (timeUnit === "minutes" && number > 60) ||
        (timeUnit === "seconds" && number > 60)
    ) {
        throw new Error ("invalid value for time segment");
    }
    
    let numString = number.toString();

    if (numString.length < 2) {
      numString = "0" + numString;
    }
    return numString;
  }