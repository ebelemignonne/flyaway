import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Topbar.css';
import {Link}  from 'react-router-dom'


export default Topbar => {
  return (
    <div className="Topbar">
      
        <h3><Link className='taxt_top' to="/connexion">Se connecter</Link></h3>
      
      <Menu>
        <Link to="/">Acceuil</Link>
        <Link to="/inscription">Inscription</Link>
        <Link to="/connexion">Connexion</Link>
        <Link to="/Reserve">Reservation</Link>
        <Link to="/">Nos vols</Link>
        <Link to="/">Enregistrements</Link>
        <Link to="/paiement">Paiement</Link>
        <Link to="/ticket">Ticket</Link>
      </Menu>
    </div>
  );
};