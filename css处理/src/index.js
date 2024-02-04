import { aa } from './a'
import './index.css'
import './style.less'

const a = 10
console.log(a + 20, aa)

const arr = [1, 2, 3]

const proArr = Promise.allSettled(arr.map((n) => Promise.resolve(n)))

console.log('proArr', proArr)

console.log('process env NODE_ENV', process.env.NODE_ENV)
