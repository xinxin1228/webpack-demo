const sum = (...rest) => {
  return rest.reduce((a, b) => a + b, 0)
}

const sub = (...rest) => {
  return rest.reduce((a, b) => a - b, 0)
}

const mul = (...rest) => {
  return rest.reduce((a, b) => a * b, 1)
}

const div = (...rest) => {
  return rest.reduce((a, b) => a / b, 1)
}

export { sub, sum, mul, div }
