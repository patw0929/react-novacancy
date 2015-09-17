# React-NoVacancy

Rewrite [novacancy.js](https://github.com/chuckyglitch/novacancy.js) in React.js.

Text blink neon golden effect React component.


## Demo & Examples

Live demo: [patw0929.github.io/react-novacancy](http://patw0929.github.io/react-novacancy/)

To build the examples locally, run:

```
npm install
npm run example
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-novacancy is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/main.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-novacancy --save
```


## Usage

```javascript
var NoVacancy = require('react-novacancy');

<NoVacancy text={'Vacancy'}
           className={'title-2'}
           fontSize={'75px'}
           blink={1} off={1}
           lightColor={'#f00'}
           glow={['0 0 80px Red', '0 0 30px FireBrick', '0 0 6px DarkRed']} />
```

### Properties

Please see the [Demo Page](http://patw0929.github.io/react-novacancy/)


## Development (`src` and the build process)

**NOTE:** The source code for the component is in `src`. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm run example`.

## Inspired by

[novacancy.js](https://github.com/chuckyglitch/novacancy.js) - [@chuckyglitch](http://chuckyglitch.twbbs.org/)

## License

MIT

Copyright (c) 2015 patw.
