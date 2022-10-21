import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import aviondeux from '../assets/aviondeux.jpeg';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import plane from '../assets/plane.png';
import {Link}  from 'react-router-dom'
import './Reserve.css';



export default function  RowRadioButtonsGroup() {
  

  return (
    <FormControl>
        <img  className='second' src={aviondeux} alt="image"></img>
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup className='radiogpe'
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel className='lab' value="female" control={<Radio />} label="Aller-S.." />
        <FormControlLabel className='lab'value="male" control={<Radio />} label="Aller-Re.." />
        <FormControlLabel className='lab' value="other" control={<Radio />} label="Multiscal.." />
        {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
      </RadioGroup>
      
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='inputs'>
        <div className='inputsone'>
          <TextField className='fd' id="standard-basic" label="Ville de départ" variant="standard" />
          <TextField className='fd' id="standard-basic" label="Ville de d'arrivée" variant="standard" />
        </div>
        <img className='planes' src={plane} alt="image"></img>
        <div className='inputstwo'>
          <div>
            <h6 classname='parag'>Date de départ</h6>
            <input classname='date' type='date'></input>
          </div>
          <div>
            <h6 classname='parag'>Date de retour</h6>
            <input classname='date' type='date'></input>
          </div>
        </div>
        <button className='vols'><Link to="/Vols">Vols</Link></button>
      </div>
      
    </Box>
    </FormControl>
    
  );
}



