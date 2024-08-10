import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
 
  let obj = {
    username: "Kashish",
    age:"19"
  }

  return (
    <>
      <h1 className='bg-red-300 p-4 rounded-md uppercase text-red-600 mb-10'>Hey kash</h1>
      <Card username="Example 1" btnText="say hi" />
      <Card username="Example 2" btnText="Say namaste"/>

    </>
  )
}

export default App
