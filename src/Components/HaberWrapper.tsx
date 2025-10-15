import React from "react";

type HaberVeri = {
     author: string | null;
     content: string | null;
     description: string | null;
     source: {
          id: string | null;
          name: string;
     };
     title: string;
     url: string;
     urlToImage: string | null;
};

type HaberWrapperProps = {
     haberler: HaberVeri[];
};

const HaberWrapper: React.FC<HaberWrapperProps> = ({ haberler }) => {
     const gecerliHaberler = haberler.filter((haber) => haber.urlToImage !== null);

     return (
          <div className="haber-wrapper">
               {gecerliHaberler.map((haber, i) => (
                    <div key={i} className="haber-karti">
                         <img
                              src={haber.urlToImage!}
                              alt={haber.title}
                              className="haber-img"
                         />
                         <h3>{haber.title}</h3>
                         <p>{haber.description}</p>
                         <a className="button"  href={haber.url} target="_blank" rel="noopener noreferrer">
                              Habere Git
                         </a>
                    </div>
               ))}
          </div>
     );
};

export default HaberWrapper;
