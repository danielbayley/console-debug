const console = { ...global.console }

console.debug = (...args) => {
  if (process.env.DEBUG) global.console.debug.apply(this, args)
}

export {console}
