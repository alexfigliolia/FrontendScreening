import { useState } from 'react';
import styled from '@emotion/styled';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import Box from '@material-ui/core/Box';
import { useDataForm } from '../hooks/form';

const useStyles = makeStyles(theme => ({
  root: {
    '& > div': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: 60px;

  legend {
    font-weight: bold;
  }
`;

const isTextField = type =>
  [
    'text',
    'number',
    'search',
    'tel',
    'email',
    'password',
    'url',
    'time',
    'week',
    'month',
    'datetime-local',
    'date',
  ].includes(type);

const isCheckbox = type => type === 'checkbox';

const isSelect = type => type === 'select';

const Form = () => {
  const [state, setState] = useState(null);

  const { status, data } = useDataForm();
  const classes = useStyles();

  if (status !== 'success' || !data) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  }

  const sections = Object.keys(data);

  const controlled = [];

  Object.values(data).forEach((section = []) => {
    section.forEach(({ dependencies }) => {
      if (dependencies && Object.keys(dependencies).length !== 0) {
        Object.keys(dependencies).forEach(item => controlled.push(item));
      }
    });
  });

  return (
    <Box>
      <form autoComplete="off">
        {Object.values(data).map((section = [], key) => {
          return (
            <Fieldset key={key} className={classes.root}>
              <legend>{sections[key]}</legend>

              {section.map(
                (
                  {
                    dependencies,
                    type,
                    label,
                    id,
                    definition,
                    sourceList = [],
                  },
                  key,
                ) => {
                  let disabled = false;

                  if (dependencies && Object.values(dependencies).length) {
                    disabled = true;

                    const dep = Object.keys(dependencies);

                    if (state) {
                      Object.keys(state).forEach(key => {
                        if (dep.includes(key)) {
                          disabled = !state[key];
                        }
                      });
                    }
                  }

                  const handleChange = ({ target }) => {
                    if (controlled.includes(id)) {
                      setState({
                        ...state,
                        [id]: target.value || target.checked,
                      });
                    }
                  };

                  if (isTextField(type)) {
                    return (
                      <div key={key}>
                        <TextField
                          disabled={disabled}
                          onChange={handleChange}
                          type={type}
                          id={id}
                          name={id}
                          label={label}
                          defaultValue=""
                          placeholder={definition}
                        />
                      </div>
                    );
                  }

                  if (isCheckbox(type)) {
                    return (
                      <div key={key}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              disabled={disabled}
                              onChange={handleChange}
                              name={id}
                            />
                          }
                          label={label}
                          placeholder={definition}
                        />
                      </div>
                    );
                  }

                  if (isSelect(type)) {
                    return (
                      <FormControl key={key}>
                        <InputLabel id={`${id}-label`}>{label}</InputLabel>
                        <Select
                          disabled={disabled}
                          onChange={handleChange}
                          labelId={`${id}-label`}
                          id={id}
                          defaultValue=""
                        >
                          {sourceList.map((item, key) => {
                            if (typeof item === 'object') {
                              return (
                                <MenuItem key={key} value={item?.code}>
                                  {item?.name}
                                </MenuItem>
                              );
                            }

                            return (
                              <MenuItem key={key} value={item}>
                                {item}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    );
                  }

                  return null;
                },
              )}
            </Fieldset>
          );
        })}
      </form>
    </Box>
  );
};

export default Form;
