import React, { memo, useState } from 'react'
import './style.less'

const App = memo(() => {
  const message = 'react'
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello {message}</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>+1</button>
    </div>
  )
})

export default App
