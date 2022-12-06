import "./App.css";
import React, { useState, useEffect } from "react";
const url =
  " https://dev.menu.ninja/api/menu/156?key=8j5vfe%24*pfb**rzt&pretty=1";
function App() {
  const [info, setInfo] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div className="App"></div>;
}

export default App;
