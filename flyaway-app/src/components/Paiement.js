import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import './Paiement.css';
import image from "../images/icones/icone-avions.png"


export default function BasicTextFields() {
  return (
    <div className="form">
      <Box
        className="box"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "33.5ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className="date-expirat0"
          id="standard-basic"
          label="Numero de la carte"
          variant="standard"
          placeholder=""
        />
        <TextField
          className="date-expirat1"
          id="standard-basic"
          label="Type de carte"
          variant="standard"
          placeholder=""
        />
        <div className="date-expiration">
          <input className="date_paiement" type="date"></input>
        </div>
        <TextField
          className="date-expirat4"
          id="standard-basic"
          label="Code de sécurité"
          variant="standard"
          placeholder=""
        />
        <TextField
          className="date-expirat5"
          id="standard-basic"
          label="Nom du titulaire de la carte"
          variant="standard"
          placeholder=""
        />
      </Box>
      <button className="button row justyfie align">
        <i class="fa-solid fa-plane-departure"></i>

        <Link className="ecrit-button" to="/Ticket">
          Valider
        </Link>
      </button>
      <p className="nb">NB: tout billet acheté est non ramboursable</p>
    </div>
  );
}

