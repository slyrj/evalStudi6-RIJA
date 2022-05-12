import React,{useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Navigation from '../components/Navigation';
import PrestHead from '../components/PrestHead';
import Footer from '../components/Footer';
 import Prestations from '../data/Prestations';
import Contact from '../pages/Contact';

const Prestation = () => {
  const [myPrestation, setMyPrestation] = useState(Prestations);

  return (
  <>
  <PrestHead />
  <Navigation />
  <div className="pres">

{myPrestatin.map((values) => {
          return (
                <div className="pres__card alt" key={values.id}>
                    <div className="meta">
                        <div className="pres__photo" ><img src={values.picture} alt={values.titre} /></div>
                    </div>
                        <div className="description">
                        <h1>{values.titre}</h1>
                        <h3>{values.prix}</h3>
                        <p>{values.text}</p>
                    
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