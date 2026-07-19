import { Suspense } from "react"
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers"
import Navbar from "./components/Navbar/Navbar"
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers"


const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

function App() {

  const playersPromise = fetchPlayers()

  return (
    <>
      <Navbar />

      {/* Available Players */}
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers playersPromise={playersPromise} />
      </Suspense>
      
      {/* <SelectedPlayers /> */}
    </>
  )
}

export default App
