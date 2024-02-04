import React, { memo, useState } from 'react'

import './style.less'

const App: React.FC = memo(() => {
  const [count, setCount] = useState<number>(10)
  const message: string = 'react'

  return (
    <div>
      <h1>Hello {message}</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  )
})

export default App
