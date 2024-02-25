import { useState } from "react";
import "./App.css";
import devIcon from "./assets/developer-centerpublic-api-svgrepo-com.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img className="logo" src={devIcon} alt="imagen"/>
      <h1>Gabriel Quiroz</h1>
      <p className="read-the-docs">Software Developer</p>
    </>
  );
}

export default App;
