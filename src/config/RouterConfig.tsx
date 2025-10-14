import { Route, Routes } from "react-router-dom"
import Home from '../Components/Home.js'
import GirisYap from '../Components/GirisYap.js'
import Kaydol from "../Components/Kaydol.js"


function RouterConfig() {
     return (
          <div>
               <Routes>
                    <Route path="/" element={<GirisYap />} />
                    <Route path="/Kaydol" element={<Kaydol />} />
                    <Route path="/Home" element={<Home />} />
               </Routes>
          </div>
     )
}

export default RouterConfig