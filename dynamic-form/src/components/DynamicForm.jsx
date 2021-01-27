import { Box, Button, Container, MenuItem, TextField } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { useEffect, useState } from 'react'
import formData from '../lib/data'
import { dependenciesCheck } from '../utils/helper';
import { FormElement } from './FormElement';


export default function DynamicForm() {
    
    const [progressbar, setProgressbar] = useState(0);
    const [formInfo, setFormInfo] = useState(formData);

    const updateProgress = () =>{
        let totalInputs = 0;
        let validInputs = 0;
    
        
    
        for (const key in formInfo) {
          formInfo[key].forEach(item=> {
            dependenciesCheck(item.dependencies, formInfo[key]) && item.type !== "checkbox" &&  totalInputs ++;
            if(item.value && !item.errorMessage){
              dependenciesCheck(item.dependencies, formInfo[key]) && item.type !== "checkbox" && validInputs ++;
            }
          });
        }
    
      
        const progress = (validInputs / totalInputs)*100;
          setProgressbar(progress);
      }

  const handleChange = (key, value, name) => {
    const form = { ...formInfo };
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
    setFormInfo(form );
  }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formInfo);
        alert("Form Submitted Successfully");
    };
    useEffect(() => {
      updateProgress();
    }, [formInfo])
    return (
        <Container>
            <Box mb={4}>
            <LinearProgress variant="determinate" value={progressbar} mb={4} />
            </Box>
            
        
                <form onSubmit={handleSubmit}>
            {Object.keys(formInfo).map(val => {
                
                return(
                    <Box mb={4} key={val}>
                    <h2 className="heading">{val}</h2> 
                    {formInfo[val].map(item => (
                          dependenciesCheck(item.dependencies, formInfo[val]) &&
                          
                            <FormElement name={val} formData={item} change={handleChange} />
                          
                    ))}
                    </ Box>
                );
                
            })}
            
            <Button type="submit" variant="contained">Submit</Button>
            </form>
            
        </Container>
    )
}
