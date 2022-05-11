import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div className="sidebar">
        <div className="id">
          <img src="./media/logo1.png" alt="logo" />
        </div>
        <div className="navigation">
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                className="navi"
                activeClassName="navActive "
              >
                <i className="fas fa-home"></i>
                <span>Accueil</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/galerie"
                className="navi"
                activeClassName="navActive"
              >
                <i className="fas fa-image"></i>
                <span>Galerie</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/prestations"
                className="navi"
                activeClassName="navActive"
              >
                <i className="fas fa-camera"></i>
                <span>Prestations</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contact"
                className="navi"
                activeClassName="navActive"
              >
                <i className="fas fa-address-book"></i>
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
