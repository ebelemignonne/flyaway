import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Connexion.css";

import FormControl from "@mui/material/FormControl";

export default function BasicTextFields() {
  return (
    <FormControl className="formulaire">
      <Box
        className="Information"
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="block_connexion">
          <i className="fa-solid fa-user icones-input_connexion"></i>
          <TextField
            className="entrer_connexion"
            type="text"
            id="name"
            label="Nom utilisateur"
            variant="standard"
          />
        </div>



        <div className="block_connexion">
          <i className="fa-solid fa-key icones-input_connexion"></i>
          <TextField
            className="entrer_connexion"
            type="password"
            id="password"
            label="Mot de passe"
            variant="standard"
          />
        </div>


      </Box>
      <button type="submit" className="btn-Envoyer_connexion">
        Valider
      </button>
    </FormControl>
  );
}
