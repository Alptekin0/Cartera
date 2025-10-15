import { MdOutlineModeEdit } from "react-icons/md";
import { CgArrowsExchangeV } from "react-icons/cg";
import CardInfo from './CardInfo'
import { useDispatch } from "react-redux";
import { toggleEditMode } from "../slices/editModeSlice";


function KartPanel() {

     const dispatch = useDispatch();

     return (
          <div className="kart-panel">

               <div className='search-filter'>
                    <input type="text" placeholder='Arama yapın...' />
                    <div className='home-icon-wrapper'>
                         <CgArrowsExchangeV title='Filtrele' className='filter-icon' />
                         < MdOutlineModeEdit title='Düzenle' className='edit-icon' onClick={() => dispatch(toggleEditMode())} />
                    </div>

                    <button className='button kart-ekle-button' >KART EKLE</button>
               </div>
               <br />
               <CardInfo /> <br />
               <CardInfo /> <br />
               <CardInfo /> <br />
               <CardInfo /> <br />
               <CardInfo /> <br />
          </div>
     )
}

export default KartPanel