import React from "react"
import { createRoot } from "react-dom/client"
import '../src/index.css'
import App from './App'
function CustomPage() 
{
  return (
    <div>
      <App />
   </div>
  )
}
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<CustomPage />)
