import { mapValueFromInputToOutputRange, uByte2hex } from '@witzbould/utils';

const uByte2hexTwoDigit = (number) => uByte2hex(number).padStart(2, '0');

/**
 * Convert rgb(a) values to hex(a)
 *
 * @param  {number} red The red color part
 * @param  {number} green The green color part
 * @param  {number} blue The blue color part
 * @param  {number} [alpha] The opacity between 0 and 1
 * @return {string} The hex value of the color in the form of #RRGGBBAA
 */
export const rgb2hex = (red, green, blue, alpha) => `#${uByte2hexTwoDigit(red)}${uByte2hexTwoDigit(green)}${uByte2hexTwoDigit(blue)}${alpha ? uByte2hexTwoDigit(mapValueFromInputToOutputRange(alpha, 0, 1, 0, 255)) : ''}`;
