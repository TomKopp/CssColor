const uByte2hex = (number) => {
	const val = Math.abs(Number(number));
	const uByte = 256;
	const baseHex = 16;

	return val < uByte ? val.toString(baseHex) : 0;
};

const uByte2hexTwoDigit = (number) => uByte2hex(number).padStart(2, '0');

export const rgb2hex = (red, green, blue, alpha) => `#${uByte2hexTwoDigit(red)}${uByte2hexTwoDigit(green)}${uByte2hexTwoDigit(blue)}${alpha ? uByte2hexTwoDigit(alpha) : ''}`;
