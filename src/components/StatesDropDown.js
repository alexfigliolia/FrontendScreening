import React from 'react';
import {MenuItem, TextField} from '@material-ui/core';

const StatesDropDown = React.memo(({statesList, stateName, setStateName, label, className}) => {
  return (
    <TextField
      className={className}
      defaultValue=""
      size="small" 
      variant="outlined" 
      label={label}
      value={stateName}
      select
      onChange={(e) => setStateName(e.target.value)}
      >
        {statesList.map(state => (
        <MenuItem key={state} value={state}>
          {state}
        </MenuItem>
      ))}
    </TextField>
  );
});

export default StatesDropDown;