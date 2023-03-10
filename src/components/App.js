import React, { useState, useEffect } from 'react'
import '../styles/App.css'
const App = () => {
  //code here
  const [value, setValue] = useState('')
  const changeText = () => {
    const para = document.querySelector('#text')
    para.innerText = `Hello my name is ${value} and I study at Newton School`
  }
  return (
    <div id="main">
      <input id="input" onChange={(e) => setValue(e.target.value)}></input>
      <button id="button" onClick={changeText}>
        Click
      </button>
      <p id="text"> Hello my name is ____ and I study at Newton School</p>
    </div>
  )
}

export default App
