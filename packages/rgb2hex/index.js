import { clampValue } from '@witzbould/utils-clamp-value';
import { mapValueRange } from '@witzbould/utils-map-value-range';
import { number2hex } from '@witzbould/utils-number2hex';

const uByte2hexTwoDigit = (number) => number2hex(clampValue(number, 0, 255)).padStart(2, '0');
const parsePercent = (value) => parseFloat(value) / 100 * 255;
const isPercent = (value) => typeof value !== 'number' && String(value).includes('%');
const parseColorChanel = (color) => uByte2hexTwoDigit(isPercent(color) ? parsePercent(color) : Number(color));
const parseAlphaChanel = (alpha) => uByte2hexTwoDigit(isPercent(alpha) ? parsePercent(alpha) : mapValueRange(Number(alpha), 0, 1, 0, 255));
const parseRgbFnc = (rgb) => {
	const regex = new RegExp(/^rgba?\((\d{1,3}\.?\d*%?),?\s*(\d{1,3}\.?\d*%?),?\s*(\d{1,3}\.?\d*%?),?\s*\/?\s*(\d{1,3}\.?\d*%?)??\)/);
	const [, ...captureGroups] = regex.exec(rgb);

	return captureGroups;
};
const render2hex = (red, green, blue, alpha) => `#${parseColorChanel(red)}${parseColorChanel(green)}${parseColorChanel(blue)}${alpha ? parseAlphaChanel(alpha) : ''}`;

/**
 * Convert rgb[a] values to hex[a]
 *
 * @param  {(number|string)} redOrRgbFnc The red color part or the `rgb()` function representation
 * @param  {number} green The green color part
 * @param  {number} blue The blue color part
 * @param  {number} [alpha] The opacity between 0 and 1
 * @return {string} The hex value of the color in the form of #RRGGBB[AA]
 */
export function rgb2hex(redOrRgbFnc, green, blue, alpha) {
	return arguments.length === 1 ? render2hex(parseRgbFnc(redOrRgbFnc)) : render2hex(redOrRgbFnc, green, blue, alpha);
}
