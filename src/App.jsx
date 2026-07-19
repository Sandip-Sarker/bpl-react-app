import { Suspense, useState } from "react"
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers"
import Navbar from "./components/Navbar/Navbar"
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers"


const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

function App() {

  const [toggle, setToggle] = useState(true)
  const playersPromise = fetchPlayers()

  return (
    <>
      <Navbar />

      <div className="flex justify-between items-center  max-w-[1200px] mx-auto">
        <h1 className="font-bold text-2xl">Available Players</h1>
        <div className="font-bold">
            <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 ${toggle===true?"bg-[#E7FE29]" : ''}  border-r-0 border-gray-400 rounded-l-2xl`}>Available</button>
            <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-l-0 ${toggle===false?"bg-[#E7FE29]": ""} rounded-r-2xl`}>Selected <span>(0)</span></button>
        </div>
      </div>

      {
        toggle === true ?
        /* Available Players */
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <AvailablePlayers playersPromise={playersPromise} />
        </Suspense> :

        <SelectedPlayers />

      }

      

    
    </>
  )
}

export default App
