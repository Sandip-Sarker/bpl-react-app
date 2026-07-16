
import navImg from './assets/logo.png'
import dollarImg from './assets/dollar.png'

function App() {

  return (
    <>
      <div className="navbar max-w-300 mx-auto">
        <div className="flex-1">
          <img src={navImg} alt="nav-img" className="w-15 h-15 rounded-full" />
        </div>
        <div className="flex items-center gap-2">
            <span>6000000000</span>
            <span>Coin</span>
            <img src={dollarImg} alt="dollar-img" className=" rounded-full" />
        </div>
      </div>
    </>
  )
}

export default App
