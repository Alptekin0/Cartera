import { useState } from 'react';
import '../App.css'
import userImage from "../images/Cartera.ico";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';




function SideBar() {

     const [isOpen, SetisOpen] = useState(true);
     const navigate = useNavigate();
     const user = auth.currentUser;


     const sidebarClose = () => {
          const sidebar = document.querySelector(".sidebar-wrapper") as HTMLElement;
          const shortSidebar = document.querySelector(".short-sidebar") as HTMLElement;
          if (isOpen) {
               sidebar.style.display = "none"
               shortSidebar.style.display = "block"
               SetisOpen(false);
          }
          else {
               shortSidebar.style.display = "none"
               sidebar.style.display = "block"
               SetisOpen(true);
          }
     }



     const out = async () => {
          await signOut(auth);
          toast.info("çıkış yapılıyor", { autoClose: 1500 });
          setTimeout(() => navigate("/"), 2500);
     }


     return (
          <div>

               <div className='short-sidebar' style={{ display: "none" }}>
                    <FaRegArrowAltCircleRight className='sagIkon' style={{ color: "white" }} onClick={sidebarClose} />
               </div>

               <div className='sidebar-wrapper'>

                    <div className='sidebar-header'>
                         <div className="sidebar-fotter">
                              <FaRegArrowAltCircleLeft style={{ color: "black" }} onClick={sidebarClose} />
                         </div>
                         <div className='sidebar-text'>
                              <p>{user?.displayName}</p>
                              <img src={userImage} alt="User image" />
                         </div>


                    </div>

                    <div className="sidebar-body">

                         <div>
                              <a href=""> Hesabım</a>
                              <a href=""> Doviz Kurları</a>
                              <a href=""> Ekonomi Haberler</a>
                              <a href=""> Profil</a>
                         </div>

                         <div className='sidebar-signOut-wrapper'>
                              <MdOutlineFollowTheSigns className='sidebar-signOut' onClick={out} />
                         </div>

                    </div>
               </div>
               <ToastContainer />
          </div>
     )
}

export default SideBar