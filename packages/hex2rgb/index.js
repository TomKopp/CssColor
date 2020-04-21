import { mapValueRange } from '@witzbould/utils-map-value-range';

/**
 * Converts 3-4 digit hex string to array of bytes
 *
 * @param {string} str Hex string
 * @return {number[]} Array of chanels in bytes
 */
const shortHex2numArr = (str) => {
	const arr = [];
	for (let id = 0; id < str.length; id++) {
		arr.push(parseInt(str[id] + str[id], 16));
	}
	return arr;
};

/**
 * Converts 6-8 digit hex string to array of bytes
 *
 * @param {string} str Hex string
 * @return {number[]} Array of chanels in bytes
 */
const longHex2numArr = (str) => {
	const arr = [];
	for (let id = 0; id < str.length; id++) {
		arr.push(parseInt(str[id] + str[++id], 16));
	}
	return arr;
};

const hex2numArr = (str) => (str.length === 3 || str.length === 4
	? shortHex2numArr(str)
	: longHex2numArr(str)
);

const render = ([
	r
	, g
	, b
	, a
], CSSColorsLevel3) => (CSSColorsLevel3
	? `rgb${a ? 'a' : ''}(${r}, ${g}, ${b}${a ? `, ${a}` : ''})`
	: `rgb(${r} ${g} ${b}${a ? ` / ${a}` : ''})`);

/**
 * Convert hex[a] values to rgb[a]
 *
 * @example
 * ```js
 * import { hex2rgb } from `@csscolor/hex2rgb`;
 *
 * const color1 = hex2rgb('#123');
 * // rgb(17 34 51)
 * ```
 *
 * @param {string} hexString Hexadecimal color string, can start with '#'
 * @param {object} [options] Object for format settings
 * @param {boolean} [options.CSSColorsLevel3=false] Use CSS Colors Level 3 functional notation (old one)
 * @param {boolean} [options.percent=false] Use percentage values
 * @return {string} The rgb value of the color in the form of `rgb(r g b[ / a])`; `rgb[a](r, g, b[, a])` if CSS Colors Level 3
 */
export const hex2rgb = (hexString, { CSSColorsLevel3, percent } = { CSSColorsLevel3: false, percent: false }) => {
	// Remove '#' if present
	const hex = hexString.startsWith('#') ? hexString.slice(1) : hexString;
	const alphaPos = 3;
	let arr = hex2numArr(hex);

	if (arr[alphaPos] && !percent) {
		arr[alphaPos] = mapValueRange(arr[alphaPos], 0, 255, 0, 1);
	}

	if (percent) {
		arr = arr.map((val) => `${mapValueRange(val, 0, 255, 0, 100)}%`);
	}

	return render(arr, CSSColorsLevel3);
};
