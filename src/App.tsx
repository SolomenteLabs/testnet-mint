import { useState } from "react"
import "./index.css"

function App() {
  const [status, setStatus] = useState("Connected")

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">SoloPass Testnet Mint</h1>
      <div className="bg-white rounded-xl shadow-lg p-6 text-center">
        <p className="text-lg">Status: <span className="font-semibold">{status}</span></p>
      </div>
    </div>
  )
}

export default App
