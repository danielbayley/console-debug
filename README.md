[`console`]`.debug`
===================
A better `console`[`.debug`]. Only logs if:

* A `DEBUG` [environment variable] is set
* [`NODE_ENV`] is set to `development`
* The `--debug` flag is passed on the command line

Install
-------
~~~ sh
npm install console-debug --save-dev
~~~

This package is _[ESM]_ [only], and so [requires] _[Node]_ [`>=`]
[`14.16`] and must be `import`ed instead of `require`d:
~~~ js
// package.json
"engines": {
  "node": ">=14.16"
},
~~~
~~~ js
//const {console} = require('console-debug')
import {console} from 'console-debug'
~~~

License
-------
[MIT] © [Daniel Bayley]

[MIT]:                      LICENSE.md
[Daniel Bayley]:            https://github.com/danielbayley

[`console`]:                https://developer.mozilla.org/docs/Web/API/console
[`.debug`]:                 https://developer.mozilla.org/docs/Web/API/console/debug

[environment variable]:     https://wikipedia.org/wiki/Environment_variable
[`NODE_ENV`]:               https://nodejs.dev/en/learn/nodejs-the-difference-between-development-and-production


[node]:                     https://nodejs.org
[requires]:                 https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
[`>=`]:                     https://docs.npmjs.com/cli/v6/using-npm/semver#ranges
[14.16]:                    https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V14.md#14.16.0
[ESM]:                      https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules
[only]:                     https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
