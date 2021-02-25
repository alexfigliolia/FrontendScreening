import React from 'react'
import form from '../helpers/data'
import Select from 'react-select';
import './Form.css'
import useForm from './useForm';
import validate from './validateInfo'
import {states, countries} from '../helpers/statesAndCountries'


export const FormContact = (submitForm) => {
  const { handleChange, values, handleSubmit, errors, dependencies, handleCountry, handleState, selectedCountry, selectedState} = useForm(validate, submitForm);
    return (
      <div className="row">
          <form onSubmit={handleSubmit} className="col-6 form-box offset-3 shadow-lg p-3 mb-5 bg-body rounded">
                {
                  form['Full Name'].map(item => {
                   return (
                      <div className={!dependencies.hasMiddleName && (item.id == 'middleName') ? "form-group text-left hide-input" : "form-group text-left mt-2"}  >
                       <label 
                       disabled="true"
                       htmlFor={item.id}
                       className={item.type == 'checkbox' ? "custom-label " : 'form-label'}>
                        {item.label}
                        </label>
                        <input 
                         className={item.type == 'checkbox' ? "custom-checkbox" : 'form-control custom-input'}
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
                    <div className={!dependencies.apartmentOrSuite && (item.id == 'address2') ? "form-group text-left mt-2 hide-input" : "form-group text-left mt-2"}  >
                      
                        {
                          item.type !== 'select' ? 
                          <div>
                             <label 
                       htmlFor={item.id}
                       className={item.type == 'checkbox' ? "custom-label" : 'form-label'}>
                        {item.label}
                        </label>
                            <input 
                        className={item.type == 'checkbox' ? "custom-checkbox" : 'form-control custom-input'}
                        key={item.id}
                        type={item.type} 
                        name={item.id}
                        placeholder={item.definition}
                        value={values[item.id]}
                        onChange={handleChange}
                             />
                          </div> : <div>
                        <label 
                       htmlFor={item.id}
                       className={item.type == 'checkbox' ? "custom-label" : 'form-label'}>
                        {item.label}
                        </label>
                        { item.id == 'country'  ? 
                        
                          <Select className=""
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
                            /> :
                             <Select className=""
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
                        }
                          </div>
                        }
                        {/* <input 
                        className={item.type == 'checkbox' ? "custom-checkbox" : 'form-control custom-input'}
                        key={item.id}
                        type={item.type} 
                        name={item.id}
                        placeholder={item.definition}
                        value={values[item.id]}
                        options={item.id == 'state' ? state : null}
                        disabled={(!dependencies.apartmentOrSuite && (item.id == 'address2')) ? true : false}
                        onChange={handleChange}
                     /> */}
                     </div>
                    )
                  })
                }
                 <button className='form-button' type="submit">Submit form</button>
            </form>
      </div>
    )
}
