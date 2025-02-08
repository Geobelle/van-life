import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Van from "./pages/van/Van"
import VanDetail from "./pages/van/VanDetails"
import "./server"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import Login from "./pages/Login"
import Dashboard from "./pages/host/Dashboard"
import Income from "./pages/host/Income"
import Reviews from "./pages/host/Reviews"
import Vans from "./pages/host/Vans"
import HostVanDetail from "./pages/host/HostVansDetail"
import HostVanInfo from "./pages/host/HostVanInfo"
import HostVanPricing from "./pages/host/HostVanPricing"
import HostVanPhotos from "./pages/host/HostVanPhotos"
import NotFound from "./pages/NotFound"
import Auth from "./Authrequired"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="van" element={<Van/>} />
          <Route path="van/:id" element={<VanDetail />} />
          <Route path="login" element={<Login />} />

          <Route element={<Auth/>}>
            <Route path="host" element={<HostLayout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="income" element={<Income/>}/>
              <Route path="vans" element={<Vans/>}/>
              <Route path="reviews" element={<Reviews/>}/>

              <Route path="vans/:id" element={<HostVanDetail/>}>
                <Route index element={<HostVanInfo/>}/>
                <Route path="pricing" element={<HostVanPricing/>}/>
                <Route path="photos" element={<HostVanPhotos/>}/>
              </Route>
            </Route>
          </Route>
          
          <Route path="*" element={<NotFound/>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
