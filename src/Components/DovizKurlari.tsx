import { useEffect, useState } from 'react';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import SideBar from './SideBar';


interface Rate {
     currency: string;
     rate: number;
}

function DovizKurlari() {

     const [data, setData] = useState<Rate[]>([]);

     useEffect(() => {
          const freecurrencyapi = new Freecurrencyapi('fca_live_R9QGOrgLWxth75cPnRLKy82y7IO40ntteW61QxG4');

          freecurrencyapi.latest({ base_currency: 'USD' })
               .then((response: any) => {
                    const ratesArray: Rate[] = [];
                    for (const [currency, rate] of Object.entries(response.data)) {
                         ratesArray.push({ currency, rate: rate as number });
                    }
                    setData(ratesArray);
               })
               .catch((error: any) => console.error(error));
     }, []);

     return (
          <div className='home-wrapper'>
               <SideBar />
               <div className='doviz-panel'>
                    <div>
                         {data.map((element, index) => (
                              <div key={index} className="doviz-row">
                                   <p className="doviz-currency">{element.currency}</p>
                                   <p className="doviz-rate">{element.rate}  $</p>
                              </div>
                         ))}
                    </div>

               </div>

          </div>
     );
}

export default DovizKurlari;
