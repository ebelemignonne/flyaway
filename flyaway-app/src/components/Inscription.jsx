import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Inscription.css";
import FormControl from "@mui/material/FormControl";

export default function BasicTextFields() {
  return (
    <FormControl className="formulaire_inscription">
      <Box
        className="Information"
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="block_inscription">
          <i className="fa-solid fa-user icones-input_inscription"></i>
          <TextField
            className="entrer_inscription"
            type="text"
            id="name"
            label="Nom utilisateur"
            variant="standard"
          />
        </div>

        <div className="block_inscription">
          <i className="fa-regular fa-envelope icones-input_inscription"></i>
          <TextField
            className="entrer_inscription"
            type="email"
            id="email"
            label="Email"
            variant="standard"
          />
        </div>

        <div className="block_inscription">
          <i className="fa-solid fa-key icones-input_inscription"></i>
          <TextField
            className="entrer_inscription"
            type="password"
            id="password"
            label="Mot de passe"
            variant="standard"
          />
        </div>

        <div className="block_inscription">
          <i className="fa-solid fa-key icones-input_inscription"></i>
          <TextField
            className="entrer_inscription"
            type="password"
            id="standard-basic"
            label="Comfirmer le mot de passe"
            variant="standard"
          />
        </div>
      </Box>
      <button type="submit" className="btn-Envoyer_inscription">
        Enregistrer
      </button>
    </FormControl>
  );
}
