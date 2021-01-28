import React from 'react';
import {MenuItem, TextField} from '@material-ui/core';

const CountriesDropdown = React.memo(({countries, setCountry, label, className}) => {
  return (
    <TextField
      className={className}
      defaultValue="" 
      size="small" 
      variant="outlined" 
      label={label}
      select
      onChange={(e) => setCountry(e.target.value)}
    >
      {countries.map(country => (
        <MenuItem key={country.code} value={country.name}>
          {country.name}
        </MenuItem>
      ))}
    </TextField> 
  );
});

export default CountriesDropdown;