import React,{useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Navigation from '../components/Navigation';
import PrestHead from '../components/PrestHead';
import Footer from '../components/Footer';
//import Prestations from '../data/Prestations';  si en dûr//  
import Contact from '../pages/Contact';

const Prestation = () => {
  const [myPrest, setMyPrest] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
       const resp = await fetch('https://env-2604330.hidora.com/prestations');
    
      const json = await resp.json();

      setMyPrest(json);
    };
    fetchData().catch((err) => {
      console.log(err);
    });
  }, []);

  return (
  <>
    <PrestHead />
    <Navigation />
    <div className="pres">

    {myPrest.map((values) => {
          return (
                <div className="pres__card alt" key={values.id}>
                    <div className="meta">
                    <div className="pres__photo" ><img src={`https://env-2604330.hidora.com${values.picture.url}`} alt={values.titre} /></div>  
                    </div>
                        <div className="description">
                        <h1>{values.titre}</h1>
                        <h3>{values.prix}</h3>
                        <p>{values.description}</p>
                    
                        <NavLink exact to="/contact"> 
                        <p className="read-more">En Savoir plus..</p>
                        </NavLink>
                        </div>
                </div>
              );
            })}
     </div>                   
  <Footer />
 </>
  );
};

export default Prestation;
