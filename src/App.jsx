import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Van from "./Van"


function App() {
  
  return (
    <BrowserRouter>
    <header>
      <nav>
        <Link className="site-logo" to="/">#VANLIFE</Link>
        <Link to="/about">about</Link>
        <Link to="/van">van</Link>
      </nav>
    </header>
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/van" element={<Van/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
