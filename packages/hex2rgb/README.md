# CssColor hex2rgb

CssColor hex2rgb converts css colors from hex representation to rgb function notation.
This includes 3 and 6 digit hex values with or without leading '#'.
It also converts 4 and 8 digit hex values with an alpha channel.

The returned rgb function notation is compatible with the CSS Colors Level 4.
It can be changed to CSS Colors Level 3 with an option.
Color channel values can also be returned as percentages via option.

## Usage

First install the package with your favorite package manager, shown here with npm:

```shell
npm i @csscolor/hex2rgb
```

Then import the package where you want to use it.
There is only one named export `hex2rgb`.

```js
import { hex2rgb } from '@csscolor/hex2rgb';

console.log(
    'Three digits with leading #:',
    hex2rgb('#123')
);
// rgb(17 34 51)



console.log(
    'Six digits with leading #:',
    hex2rgb('#123456')
);
// rgb(18 52 86)



console.log(
    'Six digits without #:',
    hex2rgb('123456')
);
// rgb(18 52 86)



console.log(
    'Four digits with alpha value:',
    hex2rgb('#1234')
);
// rgb(17 34 51 / 0.26666666666666666)



console.log(
    'Eight digits with alpha value:',
    hex2rgb('#12345678')
);
// rgb(18 52 86 / 0.47058823529411764)



console.log(
    'Four digits with alpha value and CSS Colors Level 3:',
    hex2rgb('#1234', { CSSColorsLevel3: true })
);
// rgba(17, 34, 51, 0.26666666666666666)



console.log(
    'Four digits with alpha value return as percentages:',
    hex2rgb('#1234', { percent: true })
);
// rgb(6.666666666666667% 13.333333333333334% 20% / 26.666666666666668%)



console.log(
    'Four digits with alpha value and CSS Colors Level 3 return as percentages:',
    hex2rgb('#1234', { CSSColorsLevel3: true, percent: true })
);
// rgba(6.666666666666667%, 13.333333333333334%, 20%, 26.666666666666668%)
```
