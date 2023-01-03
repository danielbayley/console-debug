import { env, argv, execArgv } from 'node:process'

const debug = env.DEBUG
  || env.NODE_ENV === 'development'
  || [ ...argv, ...execArgv ].some(flag => [`--debug`, `--inspect`].includes(flag))

const console = { ...global.console }

if (this?.window) console.debug.bind(window.console)
else console.debug = (...args) => {
  if (debug) global.console.debug.apply(this, args)
}

export {console}
