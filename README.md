[`console`]`.debug`
===================
A better `console`[`.debug`]. Only logs if:

* A `DEBUG` [environment variable] is set
* [`NODE_ENV`] is set to `development`
* `--debug` or [`--inspect`] is passed on the command line, including from within [`npm`][][`_lifecycle_`][][`script`s]
* Running in a GitHub [Actions] environment with [`ACTIONS_STEP_DEBUG`] enabled

Also `export`s the `debug` conditional with these checks.

## Install
~~~ sh
pnpm add @danielbayley/console-debug --save-dev
~~~
This package is _[ESM]_ [only], and so [requires] _[Node]_ [`>=`]
[`14.16`] and must be [`import`]ed instead of [`require`]d:
~~~ json5
// package.json
"type": "module",
"engines": {
  "node": ">=14.16"
},
~~~
~~~ js
//const { console, debug } = require("@danielbayley/console-debug")
import { console, debug } from "@danielbayley/console-debug"
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
[`--inspect`]:              https://nodejs.org/en/docs/guides/debugging-getting-started#enable-inspector

[`npm`]:                    https://npmjs.com
[`_lifecycle_`]:            https://docs.npmjs.com/cli/v9/using-npm/scripts#current-lifecycle-event
[`script`s]:                https://docs.npmjs.com/cli/v9/using-npm/scripts

[actions]:                  https://github.com/features/actions
[`ACTIONS_STEP_DEBUG`]:     https://docs.github.com/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging

[node]:                     https://nodejs.org
[requires]:                 https://docs.npmjs.com/cli/v9/configuring-npm/package-json#engines
[`>=`]:                     https://docs.npmjs.com/cli/v6/using-npm/semver#ranges
[`14.16`]:                  https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V14.md#14.16.0
[ESM]:                      https://developer.mozilla.org/docs/Web/JavaScript/Guide/Modules
[only]:                     https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
[`import`]:                 https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import
[`require`]:                https://nodejs.org/api/modules.html#requireid
