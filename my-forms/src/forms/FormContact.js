import React, {useEffect, useState} from 'react'
import form from '../helpers/data'
import Select from 'react-select';
import './Form.css'
import useForm from './useForm';
import validate from './validateInfo'
import {states, countries} from '../helpers/statesAndCountries'


export const FormContact = (submitForm) => {
  const { handleChange, values, handleSubmit, errors, middleName, address2, handleCountry, handleState, selectedCountry, selectedState} = useForm(validate, submitForm);
  const [percentCompleted, setCompleted] = useState(0);
 
  useEffect(()=> {
    let count = 0;
    Object.values(values).map((item)=> {
      if(item === '') count ++
    });
    const inputs = [middleName, address2, selectedState, selectedCountry]
    for(let input of inputs) {
      if(input === '' || input === null) count ++
    }
    console.log(count)
    setCompleted(Math.floor(((Object.keys(values).length - count) / Object.keys(values).length) * 100));
  }, [values]);

  return (
      <div className="row text-center">
          <form onSubmit={handleSubmit} className="col-6 form-box offset-3 shadow-lg p-3 mb-5 rounded">
         <h3 className="my-2 custom-title">My react form : {percentCompleted} %</h3>
                
                {
                  form['Full Name'].map(item => {
                   return (
                      <div className={!middleName.hasMiddleName && (item.id === 'middleName') ? "form-group text-left hide-input" : "form-group text-left mt-2"}  >
                        
                       <label 
                       htmlFor={item.id}
                       className={item.type === 'checkbox' ? "custom-label " : 'form-label'}>
                        {item.label}
                        </label>
                        <input 
                         className={item.type === 'checkbox' ? "custom-checkbox" : 'form-control custom-input'}
                         key={item.id}
                         type={item.type} 
                         name={item.id}
                         placeholder={item.definition}
                         value={values[item.id]}
                         onChange={handleChange}
                     />
                     {errors[item.id] && <p className="error-text">{errors[item.id]}</p>}
                     </div>
                  )
                  })
                } 
                {
                  form['Home Address'].map(item => {
                   return (
                    <div className={!address2.apartmentOrSuite && (item.id === 'address2') ? "form-group text-left mt-2 hide-input" : "form-group text-left mt-2"}  >
                      
                        {
                          item.type !== 'select' ? 
                          <div>
                          
                             <label 
                       htmlFor={item.id}
                       className={item.type === 'checkbox' ? "custom-label" : 'form-label'}>
                        {item.label}
                        </label>
                            <input 
                        className={item.type === 'checkbox' ? "custom-checkbox" : 'form-control custom-input'}
                        key={item.id}
                        type={item.type} 
                        name={item.id}
                        placeholder={item.definition}
                        value={values[item.id]}
                        onChange={handleChange}
                             />
                               {errors[item.id] && <p className="error-text">{errors[item.id]}</p>}
                          </div> : <div className={values['city'].length < 1 ? 'hide-input' : ''}>
                        <label 
                       htmlFor={item.id}
                       className={item.type === 'checkbox' ? "custom-label" : 'form-label'}>
                        {item.label}
                        </label>
                        { (item.id === 'state') ? 
                        <div>
                          <Select
                          className="custom-input"
                          classNamePrefix="custom-input"
                          value={selectedState[selectedState.value]}
                          onChange={handleState}
                          options={
                            states.map((state, index) => {
                               return {
                                  label: state,
                                  value: state,
                                  key: index
                               }
                            })
                         }
                        />
                        {errors[item.id] && <p className="error-text">{errors[item.id]}</p>}
                        </div>
                         :
                         <div>
                         <Select
                         className="custom-input"
                         classNamePrefix="custom-input"
                         value={selectedCountry[selectedCountry.value]}
                         onChange={handleCountry}
                         options={
                           countries.map((country, index) => {
                              return {
                                 label: country.name ,
                                 name: country.name,
                                 value: country.name,
                                 key: index
                              }
                           })
                        }
                       />
                         {errors[item.id] && <p className="error-text">{errors[item.id]}</p>}
                       </div>
                             
                        }
                          </div>
                        }
                     </div>
                    )
                  })
                }
                 <button className='form-button' type="submit">Submit form</button>
            </form>
      </div>
    )
}
