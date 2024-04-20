import { useState } from "react"

function App() {
  const [color, setColor] = useState("skyblue")

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}></div>
      <div className="fixed bottom-10 flex justify-center flex-wrap inset-x-0 p-2">
        <div className="bg-white flex flex-wrap justify-center gap-3 shadow-xl px-6 py-2 rounded-full">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 text-white bg100 rounded-full font-bold shadow-xl" style={{ backgroundColor: "red" }}>Red</button>

          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 text-white rounded-full font-bold shadow-xl" style={{ backgroundColor: "purple" }}>Purple</button>

          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 text-white rounded-full font-bold shadow-xl" style={{ backgroundColor: "blue" }}>Blue</button>

          <button onClick={() => setColor("violet")} className="outline-none px-4 py-1 text-black rounded-full font-bold shadow-xl" style={{ backgroundColor: "violet" }}>Violet</button>

          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 text-white rounded-full font-bold shadow-xl" style={{ backgroundColor: "green" }}>Green</button>

          <button onClick={() => setColor("teal")} className="outline-none px-4 py-1 text-white rounded-full font-bold shadow-xl" style={{ backgroundColor: "teal" }}>Teal</button>
          
          <button onClick={() => setColor("beige")} className="outline-none px-4 py-1 text-black rounded-full font-bold shadow-xl" style={{ backgroundColor: "beige" }}>Beige</button>

          <button onClick={() => setColor("indigo")} className="outline-none px-4 py-1 text-white rounded-full font-bold shadow-xl" style={{ backgroundColor: "indigo" }}>Indigo</button>

          <button onClick={() => setColor("cyan")} className="outline-none px-4 py-1 text-black rounded-full font-bold shadow-xl" style={{ backgroundColor: "cyan" }}>Cyan</button>

          

        </div>
      </div>
    </>
  )
}

export default App
