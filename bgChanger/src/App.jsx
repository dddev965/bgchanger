import { useState } from "react";
// import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen  bg-red-300" style={{ background: color }}>
      <div
        className="
        fixed bottom-16 
        border 
        flex
        flex-wrap
        justify-center
        rounded-lg
        inset-x-0
        px-2
        "
      >
        <div
          className="
        flex
        flex-wrap
        justify-center
        gap-3
        shadow-lg
      bg-white
        rounded-lg
        px-3
        py-2"
        >
          <button
          onClick={()=> setColor("red")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ background: "red" }}
          >
            red
          </button>

          <button
           onClick={()=> setColor("green")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ background: "green" }}
          >
            green
          </button>

          <button
          onClick={()=> setColor("orange")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ background: "orange" }}
          >
            orange
          </button>

          <button
          onClick={()=> setColor("yellow")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ background: "yellow" }}
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
