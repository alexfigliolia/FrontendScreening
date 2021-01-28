import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {InputAdornment, MenuItem, TextField, Box , Button} from '@material-ui/core';
import {Person, Home} from '@material-ui/icons';
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
  textFieldLeft: {
    width: '100%',
    marginBottom: theme.spacing(3),
    paddingRight: theme.spacing(2),
  },
  button: {
    background: '#2975CA',
    "&:hover": {
      backgroundColor: '#2975CA',
    },
    color: '#FFF',
  },
}));

const Form = () => {
  const classes = useStyles();
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName,] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [completed, setCompleted] = useState(0);
  const [isZipCodeError, setisZipCodeError] = useState(false);
  const { fullName, homeAddress } = form;
  const stateslist = homeAddress[4].sourceList;
  const countryList = homeAddress[5].sourceList;

  useEffect(()=> {
    const inputs = [firstName, lastName, address1, city, zipcode, state, country];
    let incomplete = 0;
    for (let input of inputs) {
      if (input === '') incomplete++;
    }
    setCompleted(Math.floor(((inputs.length - incomplete) / inputs.length) * 100));
  }, [firstName, lastName, address1, city, zipcode, state, country]);

  const verifyZipCode = (e) => {
    const reg = new RegExp(form.homeAddress[6].mask);
    const input = e.target.value.trim();
    if (input === '') {
      setisZipCodeError(false)
    } else if (reg.test(input)) { // save in state if valid input
      setZipcode(input);
      setisZipCodeError(false)
    } else {
      setisZipCodeError(true)
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const info = {firstName, lastName, address1, address2, city, zipcode, state, country};
    console.log(info);
  }

  return (
    <form className={classes.form} autoComplete="off" onSubmit={submitForm}>
      <h3 style={completed === 100 ? {color: 'green'} : {}}>Complete: {completed}%</h3>
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
          className={classes.textFieldLeft} 
          size="small" 
          variant="outlined" 
          label={homeAddress[3].label}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          className={classes.textField} 
          size="small" 
          variant="outlined" 
          label={homeAddress[6].label}
          error={isZipCodeError}
          onChange={(e) => verifyZipCode(e)}
        />
      </Box>
      <Box display="flex">
        <TextField
          className={classes.textFieldLeft}
          defaultValue=""
          size="small" 
          variant="outlined" 
          label={homeAddress[4].label}
          select
          onChange={(e) => setState(e.target.value)}
        >
          {stateslist.map(state => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className={classes.textField}
          defaultValue="" 
          size="small" 
          variant="outlined" 
          label={homeAddress[5].label}
          select
          onChange={(e) => setCountry(e.target.value)}
        >
          {countryList.map(country => (
            <MenuItem key={country.code} value={country.name}>
              {country.name}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Button type="submit" className={classes.button}>Submit</Button>
    </form>
  );
}

export default Form;