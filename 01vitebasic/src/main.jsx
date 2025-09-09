import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp()
{
  return(
    <>
    <h1>My Custom React Function's</h1>
    </>
  )
}

// const reactElement = {
//     typeof : 'a',
//     props : {
//         href : "https://google.com",
//         target : '_blank'
//     },
//     children : 'Click here to go Google.com'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Go to Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: "https://google.com",target : "_blank"},
  'click me to visit Google'
)


createRoot(document.getElementById('root')).render(
    <App/>
)
