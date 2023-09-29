import { env, argv, execArgv } from "node:process"

export const debug = "DEBUG" in env
  || "ACTIONS_STEP_DEBUG" in env
  || env.NODE_ENV === "development"
  || /--(debug|inspect)/.test([ ...argv, ...execArgv ] + env.npm_lifecycle_script)

export const console = {
  ...globalThis.console,
  debug: (...args) => debug && globalThis.console.debug.apply(this, args.map(arg =>
    _private.github.filter(arg) ? _private.github.format(arg) : arg))
}

export const _private = {
  github: {
    filter: arg => "GITHUB_ACTIONS" in env && typeof arg === "string",
    format: message => `::debug::${message}`
  }
}
