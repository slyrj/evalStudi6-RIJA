import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="socialNetwork">
      <ul>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>

      <span className="signature">
        <p> © Tous droits réservés - Charles Cantin </p>
      </span>
      <span className="signature">
        <NavLink exact to="/mentions-legales"> 
        <p className="legacy">Mentions légales</p>
        </NavLink>
      </span>
    </div>
  );
};

export default Footer;
