import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Van from "./pages/van/Van"
import VanDetail from "./pages/van/VanDetails"
import "./server"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import Vans from "./pages/host/Vans"
import HostVanDetail from "./pages/host/HostVansDetail"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="van" element={<Van/>} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>}/>
            <Route path="vans" element={<Vans/>}/>
            <Route path="reviews" element={<Reviews/>}/>
            <Route path="vans/:id" element={<HostVanDetail/>} />
          </Route>
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App

  /**
   * Challenge: add the /host/vans and /host/vans/:id routes, as well
   * as the "Vans" link in the Host navbar.
   * 
   * For now, just create the stubbed-out version of the pages (i.e.
   * components that just render an <h1>). Don't worry about adding
   * navigation from /host/vans to /host/vans/:id yet - the link to
   * /host/vans is enough for now.
   * 
   * When deciding whether or not to use nested routes, keep in mind
   * what will/won't be shared between these two pages. See the Figma
   * design file (or the screenshots) to help guide your choice.
   */