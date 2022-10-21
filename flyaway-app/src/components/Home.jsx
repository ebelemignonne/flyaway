import React from 'react' ;
import avionun  from '../assets/avionun.png'
import {Link}  from 'react-router-dom'
import mlogo from '../assets/mlogo.jpeg'
import './Home.css';



export default function Home () {
  return (
    <div>
        <img className='plany' src={mlogo} alt="image"></img>
        <img className='first' src={avionun} alt="image"></img>
        <div className='mes'>
          <h3 className='tex'>Mon billet d'avion <br></br> <span className='texo'>en quelques clics ! </span> </h3>
            <button className='btn'><Link to="/inscription">S'inscrire</Link></button>
            <button className='btns'><Link to="/Reserve">Rechercher</Link></button>
           
        </div>
    </div>
  )
}
