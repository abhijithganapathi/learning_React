import { React, useState } from 'react'
import './Test.css'

function Test({sdata}) {

  var [data, setData] = useState("hello")
  var [number, setNumber] = useState(100)

  function changeValue() {
    setNumber(number + 1)
  }

  return (
    <>
      <h1>{sdata}</h1>
      <h1>Test New Component</h1>
      <h1>Test New Component</h1>
      <h2>{data}</h2>
      <h2>{number}</h2>
      <button onClick={changeValue}>click</button>
    </>
  )
}

export default Test