import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './index.css'

const app = createRoot(document.querySelector('#app'))

app.render(<App />)
