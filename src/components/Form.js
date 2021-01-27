import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, TextField } from '@material-ui/core';
import { Person, Home } from '@material-ui/icons';
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
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  return (
    <form className={classes.form} autoComplete="off">
      <TextField
        className={classes.textField} 
        size="small" 
        variant="outlined" 
        label="Full Name"
        InputProps= {{
          startAdornment: <InputAdornment position="start"><Person /></InputAdornment>
        }}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        className={classes.textField} 
        size="small" 
        variant="outlined" 
        label="Address"
        InputProps= {{
          startAdornment: <InputAdornment position="start"><Home /></InputAdornment>
        }}
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        className={classes.textField} 
        size="small" 
        variant="outlined" 
        label="city"
        onChange={(e) => setCity(e.target.value)}
      />
    </form>
  );
}

export default Form;