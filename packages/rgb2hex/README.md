# CssColor rgb2hex

CssColor rgb2hex converts css colors from rgb function notation to hex representation.

## Usage

First install the package with your favourite package manager, shown here with npm:

```shell
npm i @csscolor/rgb2hex
```

Then import the packge where you want to use it.
There is only one named export `rgb2hex`.

```js
import { rgb2hex } from '@csscolor/rgb2hex';

console.log(
    'Three values:',
    rgb2hex(17, 34, 51)
);
// #112233

console.log(
    'Three values with alpha value:',
    rgb2hex(17, 34, 51, 0.26666666666666666)
);
// #11223344

console.log(
    'Three values rgb function (CSSColorsLevel4):',
    rgb2hex('rgb(17 34 51)')
);
// #112233

console.log(
    'Rgb fnc with alpha value:',
    rgb2hex('rgb(17 34 51 / 0.26666666666666666)')
);
// #11223344

console.log(
    'Rgb fnc in percent:',
    rgb2hex('rgb(6.666666666666667% 13.333333333333334% 20%)')
);
// #112233

console.log(
    'Rgb fnc in percent with alpha value:',
    rgb2hex('rgb(6.666666666666667% 13.333333333333334% 20% 26.666666666666668%)')
);
// #11223344

console.log(
    'Three values rgb function (CSSColorsLevel3):',
    rgb2hex('rgb(17, 34, 51)')
);
// #112233

console.log(
    'Rgba fnc with alpha value:',
    rgb2hex('rgba(17, 34, 51, 0.26666666666666666)')
);
// #11223344

console.log(
    'Rgba fnc in percent with alpha value:',
    rgb2hex('rgba(6.666666666666667%, 13.333333333333334%, 20%, 26.666666666666668%)')
);
// #11223344
```
