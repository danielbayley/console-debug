const debug = process.env.DEBUG || process.env.NODE_ENV === 'development'

const console = { ...global.console }

console.debug = (...args) => {
  if (debug) global.console.debug.apply(this, args)
}

export {console}
