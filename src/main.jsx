import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

// Preload critical resources
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  })
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
