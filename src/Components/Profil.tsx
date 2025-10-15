import SideBar from './SideBar';
import { useState, useEffect } from "react";
import foto from '../images/Cartera.ico';
import { auth } from '../config/firebase'; // firebase setup
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";


function Profil() {
     const [accountId, setAccountId] = useState<string | null>(null);
     const [user, setUser] = useState<User | null>(null);

     // Tek seferlik accountId üretme
     useEffect(() => {
          const savedId = localStorage.getItem("accountId");
          if (savedId) {
               setAccountId(savedId);
          } else {
               const id = Math.floor(1000000000 + Math.random() * 9000000000);
               setAccountId(id.toString());
               localStorage.setItem("accountId", id.toString());
          }
     }, []);

     // Firebase kullanıcı bilgilerini çekme
     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               if (currentUser) {
                    setUser(currentUser);
               } else {
                    setUser(null);
               }
          });

          return () => unsubscribe();
     }, []);

     return (
          <div className='home-wrapper'>
               <SideBar />
               <div className='profil-container'>
                    <h1>PROFİL</h1>
                    <hr />
                    <div className='profil-info'>
                         <div className='profil-header'>
                              <h3>{user?.displayName || "NAME SURNAME"}</h3>
                              <img src={foto} alt="" />
                         </div>

                         <p>E-MAİL ADRESİ: {user?.email || "E-MAİL ADRESİ"}</p>
                         <p>BAĞLI HESAPLAR</p>
                         <p>HESAP ID : {accountId}</p>
                    </div>
               </div>
          </div>
     );
}

export default Profil;
