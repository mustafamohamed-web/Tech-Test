import "./App.css";
import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Form from "./components/Form";
import axios from "axios";

const url =
  " https://dev.menu.ninja/api/menu/156?key=8j5vfe%24*pfb**rzt&pretty=1";
function App() {
  const [info, setInfo] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setInfo(data.menu.items);
    console.log(data.menu.items);
  };

  useEffect(() => {
    getData();
  }, [url]);
  return (
    <div className="App">
      <Menu info={info} />
      <Form />
    </div>
  );
}

export default App;
