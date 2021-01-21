import { Component, Fragment } from 'react';
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  LinearProgress
} from '@material-ui/core';
import "./App.css";
import form from './lib/data';
import { FormFields, checkDependenciesCondition } from './utils';
class App extends Component {
  state = {
    form: form,
    progress:0
  }

  handleChange = (key, value, name) => {
    const form = { ...this.state.form };
    form[name].forEach(element => {
      if (element.id === key) {
        element.value = value
        if(!element.value){
          element.errorMessage = element.description
        }else if (element.mask && !element.mask.test(value)) {
          element.errorMessage = element.label +" is not valid";
        } else {
          element.errorMessage = ""
        }
      }
    });
    this.setState({ form },()=>{
      this.updateProgress();
    });
  }
  updateProgress = () =>{
    let totalKeys = 0;
    let validKeys = 0;
    for (const key in form) {
      for(const item of form[key]){
        totalKeys ++;
        if(item.value && !item.errorMessage){
          validKeys ++;
        }
      }
    }
    const progress = (validKeys / totalKeys)*100;
    this.setState({
      progress
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {};
    let isValid = true;
    const form = {...this.state.form};
    
    for (const key in form) {
      for(let item of form[key]){
        if(!item.value){
          if(!item.dependencies){
            isValid = false;
            item.errorMessage = item.definition;
          }else{
            if(checkDependenciesCondition(item.dependencies,form[key])){
              isValid = false;
              item.errorMessage = item.definition;
            }
          }
        }else if(item.errorMessage){
          isValid = false;
        }
        if (data[key]) {
          data[key].push({
            [item.id]: item.value
          })
        } else {
          data[key] = [{
            [item.id]: item.value
          }]
        }
      }
    }
    if(!isValid){
      this.setState({form});
    }else{
      alert("Form is submitted successfully");
    }
    
  }

  render() {
    const labels = Object.keys(form);
    return (
      <Container maxWidth="md">
        <LinearProgress className="progress-bar-top" variant="determinate" value={this.state.progress} />
        <Paper>
          <form className="p-1" noValidate onSubmit={this.handleSubmit}>
            <Grid container >
              {labels.map(label => {
                return (
                  <Fragment key={label}>
                    <Grid item xs={12}>
                      <Typography component="h1" variant="h5">
                        {label}
                      </Typography>
                    </Grid>
                    {
                      form[label].map((item) => (
                        checkDependenciesCondition(item.dependencies, this.state.form[label]) &&
                        <Grid item xs={12} key={item.id}>
                          <FormFields name={label} formData={item} change={this.handleChange} />
                        </Grid>
                      ))
                    }
                  </Fragment>
                )
              })}
              <Grid item xs={12} className="pt-1">
                <Button variant="contained" color="primary" fullWidth size="large" type="submit">Submit</Button>
              </Grid>
            </Grid>
          </form>
          <LinearProgress className="progress-bar-bottom" variant="determinate" value={this.state.progress} />
        </Paper>
      </Container>
    )

  }
}

export default App;
