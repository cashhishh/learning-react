import { useState } from 'react'


import './App.css'

function App() {
  let [counter,setCounter ]=useState(0)
  //let counter = 5;
  const addValue = () => {
    counter = counter + 1;
    setCounter (counter)
  }
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter)
  }
  return (
    <>
      <h1>HEY Kashish Rajput!</h1>
      <h2>Counter value : {counter}</h2>
      <button 
       onClick={addValue}>Add value</button>
      <br/>
      <br/>
      <button
      onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
