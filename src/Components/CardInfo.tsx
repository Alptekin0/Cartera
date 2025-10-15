import { RxDragHandleHorizontal } from "react-icons/rx";
import { MdContentCopy } from "react-icons/md";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";





function CardInfo() {

     const [copied, setCopied] = useState(false);

     const copy = () => {
          const iban = document.querySelector(".iban") as HTMLElement | null;
          if (!iban) return;
          const text = iban.innerText;
          navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
     };

     const editMode = useSelector((state: RootState) => state.editMode.value);

     console.log(editMode);

     if (editMode) {
         const card = document.querySelector(".card-wrapper") as HTMLElement;
         card.style.backgroundColor = "red";
     }


     return (
          <div className='card-wrapper'>
               <RxDragHandleHorizontal className="drag-icon" />
               <div className="banka-kart-bilgi">
                    <h3>YAPIKREDİ</h3>
                    <p className="iban-bilgi">iban : <span className="iban">TR00 0000 0000 0000 0000 0000 00</span> </p>
                    <MdContentCopy title="Kopyala" className="copy-icon" onClick={copy} />  {copied ? <FaCheck style={{ marginLeft: "2px" }} /> : ""}
               </div>
               <div className="card-bakiye-bilgi">
                    <p>Bakiye : 25.000$       </p>
                    <p>Borç :   1.225$       </p>
                    <p>Asgari Tutar : 369$   </p>
               </div>
          </div>
     )
}

export default CardInfo