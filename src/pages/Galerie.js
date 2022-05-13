import React,{ useState, useEffect } from 'react';
import GalerieHead from '../components/GalerieHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Galerie = () => {

    const [picture,setPicture] = useState([]);

    const url = ' https://env-2604330.hidora.com/photos';
    useEffect(() => {
      const fetchData = async () => {
        const resp = await fetch(url);
  
        const json = await resp.json();
  
        setPicture(json);
      };
      fetchData().catch((err) => {
        console.log(err);
      });
    }, []);

  
// fonction filtre avec onClick    
function filterResult(categorie) {
  const url = `https://env-2604330.hidora.com/photos?categorie_eq=${categorie}`;
  console.log(url);

  const fetchData = async () => {
  const resp = await fetch(url);
  const json = await resp.json();
  setPicture(json);
  };

  fetchData().catch((err) => {
    console.log(err);
  });
}
    return (
        <>
            <GalerieHead />
            <Navigation />
            <main className="container-flu mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-2 ">
                            <button className="btn" onClick={() => filterResult('mariage')}>
                            Mariage
                            </button>
                            <button className="btn" onClick={() => filterResult('grossesse')}>
                            Grossesse
                            </button>
                            <button className="btn" onClick={() => filterResult('bebe')}>
                            Bébé
                            </button>
                            <button className="btn" onClick={() => filterResult('famille')}>
                            Famille
                            </button>
                            <button className="btn" onClick={() => filterResult('bapteme')}>
                            Baptême
                            </button>
                            <button className="btn" onClick={() => filterResult('couple')}>
                            Couple
                            </button>
                            <button className="btn" onClick={() => filterResult('portrait')}>
                            Portrait
                            </button>
                    </div>
                  
                    <div className="col-md-10">
                        <div className="row">
                            {picture.map((result) => {
                            return ( 
                             <div className="col-md-4 mb-4" > 
                                <div className="card mb-4 =" key={result.id}>
                                <img src={result.img_url} className="card-img-top " alt={result.category}/> 
                                </div>
                            </div> 
                              );
                            })}
                        </div>
                    </div>
                </div>
             </main>
            <Footer /> 
        </>
    );
};

export default Galerie;