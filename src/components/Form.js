import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, MenuItem, TextField, Box } from '@material-ui/core';
import { Person, Home } from '@material-ui/icons';
import { states, countries } from '../data/statesAndCountries';
import form from '../data/data';

const useStyles = makeStyles((theme) => ({
  form: {
    width: 540,
    margin: 'auto',
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
}));

const Form = () => {
  const classes = useStyles();
  const [firstName, setfirstName] = useState('');
  const [LastName, setLastName,] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const { fullName, homeAddress } = form;
  console.log(fullName)
  console.log(homeAddress)
  return (
    <form className={classes.form} autoComplete="off">
      <TextField
        className={classes.textField} 
        size="small" 
        variant="outlined" 
        label={fullName[0].label}
        InputProps= {{
          startAdornment: <InputAdornment position="start"><Person /></InputAdornment>
        }}
        onChange={(e) => setfirstName(e.target.value)}
      />
      <TextField
        className={classes.textField} 
        size="small" 
        variant="outlined" 
        label={fullName[3].label}
        InputProps= {{
          startAdornment: <InputAdornment position="start"><Person /></InputAdornment>
        }}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        className={classes.textField} 
        size="small" 
        variant="outlined" 
        label={homeAddress[0].label}
        InputProps= {{
          startAdornment: <InputAdornment position="start"><Home /></InputAdornment>
        }}
        onChange={(e) => setAddress1(e.target.value)}
      />
      <TextField
        className={classes.textField} 
        size="small" 
        variant="outlined" 
        label={homeAddress[2].label}
        InputProps= {{
          startAdornment: <InputAdornment position="start"><Home /></InputAdornment>
        }}
        onChange={(e) => setAddress2(e.target.value)}
      />
      <Box display="flex" >
        <TextField
          className={classes.textField} 
          size="small" 
          variant="outlined" 
          label="City"
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          className={classes.textField} 
          size="small" 
          variant="outlined" 
          label="Zipcode"
          onChange={(e) => setZipcode(e.target.value)}
        />
      </Box>
      <Box display='flex'>
        <TextField
          className={classes.textField} 
          size="small" 
          variant="outlined" 
          label="State/Province"
          select
          onChange={(e) => setState(e.target.value)}
        >
          {states.map(state => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className={classes.textField} 
          size="small" 
          variant="outlined" 
          label="Country"
          select
          onChange={(e) => setCountry(e.target.value)}
        >
          {countries.map(country => (
            <MenuItem key={country.code} value={country.name}>
              {country.name}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </form>
  );
}

export default Form;