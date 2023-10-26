import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from "react-dom/client"
import '../src/index.css'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
function CustomPage() 
{
  return (
    <div>
      <Header />
      <Body />
      <Footer />
   </div>
  )
}
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<CustomPage />)
