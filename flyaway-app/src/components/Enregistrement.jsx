import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import airtel from '../components/img/airtel.png';
import moov from '../components/img/moov.png';
import orange from '../components/img/orange.png';
import paypal from '../components/img/paypal.png';
import Visa from '../components/img/Visa.png';
import mastercard from '../components/img/mastercard.png';
import './Enregistrement.css';
import {Link} from 'react-router-dom'



const currencies = [
  {
    value: 'classe Economique',
    label: 'ECO',
  },
  {
    value: 'classe Affaires',
    label: 'Affaires',
  },
  {
    value: 'classe VIP',
    label: 'VIP',
  },
 
];
export default function BasicTextFields() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
   <div className='formulaire'>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '33ch' },
      }}
      noValidate
      autoComplete="off"
      >
      
      <TextField id="standard-basic" label="Nom " variant="standard" />
      <TextField id="standard-basic" label="Prénom" variant="standard" />
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Numéro de passeport" variant="standard" />
      <TextField id="standard-basic" label="Passagers" variant="standard" />
      <TextField
          id="standard-select-currency"
          select
          value={currency}
          onChange={handleChange}
          helperText="Sélectionner votre classe"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
      </TextField>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Choisissez votre moyen de paiement</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
       
        
          <div>
            <div>
              <FormControlLabel value="mobile " control={<Radio />} label="Mobile Money" />
            </div>
            <div  className='paie'>
              <img src={airtel}  alt="" className='logo' />
              <img src={moov} alt="" className='logo' />
              <img src={orange} alt="" className='logo'/>
            </div>
          </div>
            
          <div className='paies'>
            <div>
              <FormControlLabel value="paypal" control={<Radio />} label="PayPal"  />
            </div>
            <div>
              <img src={paypal} alt="" className='logo' />
            </div>
          </div>
          <div>
            <div>
            <FormControlLabel value="carte" control={<Radio />} label="Carte de crédit/débit" />
            </div>
            <div className='paie1'><Link to="/Paiement">
              <img src={Visa} alt="" className='logo1' />
              <img src={mastercard} alt="" className='logo' />
            </Link>
            </div>
          </div>
      
      </RadioGroup>
    </FormControl>
    
    </Box>
   </div>
  
  );
}