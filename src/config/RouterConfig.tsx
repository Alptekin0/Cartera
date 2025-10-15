import { Route, Routes } from "react-router-dom"
import Home from '../Components/Home.js'
import GirisYap from '../Components/GirisYap.js'
import Kaydol from "../Components/Kaydol.js"
import DovizKurlari from "../Components/DovizKurlari.js"
import EkonomiHaber from "../Components/EkonomiHaber.js"
import Profil from "../Components/Profil.js"


function RouterConfig() {
     return (
          <div>
               <Routes>
                    <Route path="/" element={<GirisYap />} />
                    <Route path="/Kaydol" element={<Kaydol />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/DovizKurlari" element={<DovizKurlari />} />
                    <Route path="/EkonomiHaber" element={<EkonomiHaber />} />
                    <Route path="/Profil" element={<Profil />} />

               </Routes>
          </div>
     )
}

export default RouterConfig