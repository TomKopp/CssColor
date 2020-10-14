import assert from 'assert';
import { hex2rgb } from '../index.js';

describe('hex2rgb', function () {
	it(
		'Three digits with leading #'
		, function () {
			return assert.strictEqual(hex2rgb('#123'), 'rgb(17 34 51)');
		}
	);

	it(
		'Six digits with leading #'
		, function () {
			return assert.strictEqual(hex2rgb('#123456'), 'rgb(18 52 86)');
		}
	);

	it(
		'Six digits with without #'
		, function () {
			return assert.strictEqual(hex2rgb('123456'), 'rgb(18 52 86)');
		}
	);

	it(
		'Four digits with alpha value'
		, function () {
			return assert.strictEqual(hex2rgb('#1234'), 'rgb(17 34 51 / 0.26666666666666666)');
		}
	);

	it(
		'Eight digits with alpha value'
		, function () {
			return assert.strictEqual(hex2rgb('#12345678'), 'rgb(18 52 86 / 0.47058823529411764)');
		}
	);

	it(
		'Four digits with alpha value and CSS Colors Level 3'
		, function () {
			return assert.strictEqual(
				hex2rgb('#1234', { CSSColorsLevel3: true })
				, 'rgba(17, 34, 51, 0.26666666666666666)'
			);
		}
	);

	it(
		'Four digits with alpha value return as percentages'
		, function () {
			return assert.strictEqual(
				hex2rgb('#1234', { percent: true })
				, 'rgb(6.666666666666667% 13.333333333333334% 20% / 26.666666666666668%)'
			);
		}
	);

	it(
		'Four digits with alpha value and CSS Colors Level 3 return as percentages'
		, function () {
			return assert.strictEqual(
				hex2rgb('#1234', { CSSColorsLevel3: true, percent: true })
				, 'rgba(6.666666666666667%, 13.333333333333334%, 20%, 26.666666666666668%)'
			);
		}
	);
});
