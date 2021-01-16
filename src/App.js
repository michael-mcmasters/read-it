import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/pics.json")
      .then(res => res.json())
      .then(result => {
        setInfo(result.data.children);
      })
  })

  return (
    <div className="App">
      <p>Hello World!</p>
      {info.map(d => (
        <div>
          <p>{d.data.title}</p>
          <img src={d.data.thumbnail} width="1000" alt="" />
        </div>
      ))}
    </div>
  )
}

export default App;
