import assert from 'assert';
import { rgb2hex } from '../index.js';

describe('rgb2hex', function () {
	it(
		'Three values'
		, function () {
			return assert.strictEqual(
				rgb2hex(17, 34, 51)
				, '#112233'
			);
		}
	);

	it(
		'Three values with alpha value'
		, function () {
			return assert.strictEqual(
				rgb2hex(17, 34, 51, 0.26666666666666666)
				, '#11223344'
			);
		}
	);

	it(
		'Three values rgb function (CSSColorsLevel4)'
		, function () {
			return assert.strictEqual(
				rgb2hex('rgb(17 34 51)')
				, '#112233'
			);
		}
	);

	it(
		'Rgb fnc with alpha value'
		, function () {
			return assert.strictEqual(
				rgb2hex('rgb(17 34 51 / 0.26666666666666666)')
				, '#11223344'
			);
		}
	);

	it(
		'Rgb fnc in percent'
		, function () {
			return assert.strictEqual(
				rgb2hex('rgb(6.666666666666667% 13.333333333333334% 20%)')
				, '#112233'
			);
		}
	);

	it(
		'Rgb fnc in percent with alpha value'
		, function () {
			return assert.strictEqual(
				rgb2hex('rgb(6.666666666666667% 13.333333333333334% 20% 26.666666666666668%)')
				, '#11223344'
			);
		}
	);

	it(
		'Three values rgb function (CSSColorsLevel3)'
		, function () {
			return assert.strictEqual(
				rgb2hex('rgb(17, 34, 51)')
				, '#112233'
			);
		}
	);

	it(
		'Rgba fnc with alpha value'
		, function () {
			return assert.strictEqual(
				rgb2hex('rgba(17, 34, 51, 0.26666666666666666)')
				, '#11223344'
			);
		}
	);

	it(
		'Rgba fnc in percent with alpha value'
		, function () {
			return assert.strictEqual(
				rgb2hex('rgba(6.666666666666667%, 13.333333333333334%, 20%, 26.666666666666668%)')
				, '#11223344'
			);
		}
	);
});
