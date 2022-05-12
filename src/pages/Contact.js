import React, {Component} from 'react';
import Footer from '../components/Footer';
import ContactHead from '../components/ContactHead';
import Navigation from '../components/Navigation';
import Form from '../components/Form';

const Contact = () => {
    return (
    <>
    <ContactHead />
    <Navigation />
    <div className="contactMe">   
        <div className="box">
            <Form />
            {/* <!-- information */}
            <div className="contact info ">
                <h3>Infos Contact<span> <i className="fab fa-envelope" ></i></span></h3>
                <div className="infoBox">
                    <div>
                        <span><i className="fab fa-enveloppe"></i></span>
                        <p>Ateliers Charles CANTIN  1 Av.d'Eylau, 
                        75016 Paris</p>
                    </div>
                    <div>
                        <span> <i className="fab fa-envelope" ></i></span>
                        <a href="mailto:charlescanti@phohtographe.fr">charlescantin@photographe.fr</a>
                    </div>
                    <div>
                        <span> <i className="fab fa-phone" ></i></span>
                        <a href="tel:+33 6 12 13 14 15">06 12 13 14 15</a>
                    </div> 
                </div>
            </div>
        </div> 
    </div>
    <Footer />
    </>
    );
};
export default Contact;