import React from 'react'
import MovieApp from './components/MovieApp'

/* import MToHConverter from './components/MToHConverter';
import KmToMileConverter from './components/KmToMileConverter';
import { useState } from 'react'; */

function App() {
  /* const [index, setIndex] = useState("first");

  const onChange = (event) => {
    setIndex(event.target.value);
  } */
  return (
    <div>
      <MovieApp />
      {/* <ToDoList /> */}
      {/* <h1>Converter</h1>
      <select value={index} onChange={onChange}>
        <option value="first">select an option</option>
        <option value="0">Minutes to Hours</option>
        <option value="1">Km to Mile</option>
      </select>
      {(index === "first") ? <h3>Please select an option</h3> : null}
      {(index === "0") ? <MToHConverter /> : null}
      {(index === "1") ? <KmToMileConverter /> : null} */}
    </div>
  )
}

export default App
