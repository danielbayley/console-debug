import { env, argv, execArgv } from 'node:process'

const debug = env.DEBUG
  || env.NODE_ENV === 'development'
  || /--(debug|inspect)/.test([ ...argv, ...execArgv ] + env.npm_lifecycle_script)
  || env.GITHUB_ACTIONS && env.ACTIONS_STEP_DEBUG

const console = { ...global.console }

if (this?.window) console.debug.bind(window.console)
else console.debug = (...args) => {
  if (debug) global.console.debug.apply(this, args)
}

export {console}
