# moment-he

[Human Era](https://en.wikipedia.org/wiki/Holocene_calendar) format for moment.js.

[![A New History for Humanity – The Human Era](http://img.youtube.com/vi/czgOWmtGVGs/0.jpg)](http://www.youtube.com/watch?v=czgOWmtGVGs)

## Installation

```sh
yarn add moment-he
```

## Examples

```js
const moment = require('moment-he')

const now = moment()

// Base formats
now.humanEra('YY') // 17  (doesn't apply for short format)
now.humanEra('YYYY') // 12017
now.humanEra('Y') // 12017
now.humanEra('gggg') // 12017
now.humanEra('GGGG') // 12017

// Base formats (with suffix)
now.humanEra('YY', true) // 17
now.humanEra('YYYY', true) // 12017 HE
now.humanEra('Y', true) // 12017 HE
now.humanEra('gggg', true) // 12017 HE
now.humanEra('GGGG', true) // 12017 HE

// Localized formats
now.humanEra('L') // 08/06/12017
now.humanEra('l') // 8/6/12017
now.humanEra('LL') // August 6, 12017
now.humanEra('ll') // Aug 6, 12017
now.humanEra('LLL') // August 6, 12017 2:36 PM
now.humanEra('lll') // Aug 6, 12017 2:36 PM
now.humanEra('LLLL') // Sunday, August 6, 12017 2:36 PM
now.humanEra('llll') // Sun, Aug 6, 12017 2:36 PM

// Localized formats (with suffix)
now.humanEra('L', true) // 08/06/12017 HE
now.humanEra('l', true) // 8/6/12017 HE
now.humanEra('LL', true) // August 6, 12017 HE
now.humanEra('ll', true) // Aug 6, 12017 HE
now.humanEra('LLL', true) // August 6, 12017 HE 2:42 PM
now.humanEra('lll', true) // Aug 6, 12017 HE 2:42 PM
now.humanEra('LLLL', true) // Sunday, August 6, 12017 HE 2:42 PM
now.humanEra('llll', true) // Sun, Aug 6, 12017 HE 2:42 PM

```

## API

The only new API is the `moment().humanEra()` method (also aliased as `moment().he()`).

It works exactly like [`moment().format()`](https://momentjs.com/docs/#/displaying/format/), the only difference being that it returns years in the Holocene Calendar instead of ISO 8601.

### `moment().humanEra(format[, suffix])`

#### Arguments
- `format` (string): exact same requirements as [`moment().format()`](https://momentjs.com/docs/#/displaying/format/)
- `suffix` (boolean): whether to display an extra 'HE' after each year, defaults to `false`

#### Output
A string, very similar to what [`moment().format(format)`](https://momentjs.com/docs/#/displaying/format/) would return but with HE years!
