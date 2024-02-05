function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello')
    }, 1000)
  })
}

const arr = [1, 2, 3]

const proArr = Promise.allSettled(arr.map((n) => Promise.resolve(n)))