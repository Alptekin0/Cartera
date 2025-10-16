import { MdOutlineModeEdit } from "react-icons/md";
import { CgArrowsExchangeV } from "react-icons/cg";
import CardInfo from './CardInfo'
import { useDispatch } from "react-redux";
import { toggleEditMode } from "../slices/editModeSlice";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { useStore } from "../store/store";


function KartPanel() {

     const [input, Setinput] = useState("");
     const dispatch = useDispatch();
     const cardName = useStore((state) => state.cardName);

     const arama = (event: ChangeEvent<HTMLInputElement>) => {
          Setinput(event.target.value);
     };





     return (
          <div className="kart-panel">

               <div className='search-filter'>
                    <input type="text" placeholder='Arama yapın...' value={input} onChange={arama} />
                    <div className='home-icon-wrapper'>
                         <CgArrowsExchangeV title='Filtrele' className='filter-icon' />
                         < MdOutlineModeEdit title='Düzenle' className='edit-icon' onClick={() => dispatch(toggleEditMode())} />
                    </div>

                    <button className='button kart-ekle-button' >KART EKLE</button>
               </div>
               <br />
               <CardInfo cardName={cardName} /> <br />
               <CardInfo cardName="Ahmet" /> <br />
               <CardInfo cardName={cardName} /> <br />
               <CardInfo cardName={cardName} /> <br />
               <CardInfo cardName={cardName} /> <br />
          </div>
     )
}

export default KartPanel