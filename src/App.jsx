import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  console.log(`isOpen`, isOpen);
  return (
    <>
      <h1>Navbar</h1>
      <h1> I am feeling lucky</h1>
      <div style={{ display: "flex" }}>
        {isOpen && <h1>Hello</h1>}
        <button onClick={() => setIsOpen(!isOpen)}>X</button>
      </div>

      <h1> Thank you</h1>
      <h1>footer</h1>
    </>
  );
}

export default App;
