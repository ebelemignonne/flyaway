import React from "react";
import { Link } from "react-router-dom";
import "./Ticket.css";
import telechargement from "../images/icones/akar-icons_download.png";

export const Ticket = () => {
  return (
    <div className="Ticket">
      <div className="destination">
        <div className="destinations">
          <p>Libreville</p>
          <h2>LBV</h2>
        </div>
        <div className="Ligne">
          <div className="Lignes">
            <div className="icone-avion row align justyfie">
              <hr className="hr" />
              <i class="fa-sharp fa-solid fa-plane"></i>
              <hr className="hr" />
            </div>
          </div>
        </div>
        <div className="destinations">
          <p>Port-Gentil</p>
          <h2>POG</h2>
        </div>
      </div>

      <div className="billet">
        <div className="">
          <div className="row numero-du-vol">
            <div>
              <p>N Vol</p>
              <h2>AFR 201</h2>
            </div>
            <div>
              <p>N Vol</p>
              <h2>AFR 201</h2>
            </div>
          </div>

          <div className="row date">
            <div>
              <p>N Vol</p>
              <h2>AFR 201</h2>
            </div>
            <div>
              <p>N Vol</p>
              <h2>AFR 201</h2>
            </div>
            <div className="boite">
              <p>N Vol</p>
              <h2>AFR 201</h2>
            </div>
          </div>

          <div className="passager_titre">
            <p>Passager</p>
          </div>
          <div className="passager row align">
            <div className="area"></div>
            <p>Clenn ZINGA</p>
          </div>
          <div className="passager row align">
            <div className="area2"></div>
            <p>Leila Moukagni</p>
          </div>
          <div className="passager row align rond-bleu">
            <div className="area-bleu"></div>
          </div>
          <div className="passager row align rond-bleu2">
            <div className="area-bleu"></div>
          </div>
          <div className=" code-barre">
            <div className=""></div>
          </div>
        </div>

        <div className="passager2">
          <p>Details & baggage fees</p>
        </div>


      </div>
        <div className="ombre">
          <div className="code-barre-bleu">
            <div className=""></div>
          </div>
          <div className=" code-barre-bleu2">
            <div className=""></div>
          </div>
          <div className=" code-barre-bleu3">
            <div className=""></div>
          </div>
        </div>

      <button className="buttons_tiquet">
        <Link className="ecrit-button" to="/Telechargement">
          Télécharger
        </Link>
        <i class="fa-solid fa-arrow-down-to-bracket"></i>
      </button>
    </div>
  );
};
export default Ticket;
