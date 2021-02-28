import React, { useState } from 'react';
import data from '../data';
import TextInput from '../components/TextInput';
import CheckBoxInput from './CheckBoxInput';
import SelectInput from './SelectInput';

const DynamicForm = () => {
  const fullName = data['Full Name'];
  const homeAddress = data['Home Address'];

  const firstName = fullName[0];
  const hasMiddleName = fullName[1];
  const middleName = fullName[2];
  const lastName = fullName[3];
  const address1 = homeAddress[0];
  const apartmentOrSuite = homeAddress[1];
  const address2 = homeAddress[2];
  const city = homeAddress[3];
  const state = homeAddress[4];
  const country = homeAddress[5];
  const zipCode = homeAddress[6];

  const [user, setUser] = useState({
    firstName: '',
    hasMiddleName: false,
    middleName: '',
    lastName: '',
    address1: '',
    apartmentOrSuite: false,
    address2: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    const id = e.target.id;
    setUser({ ...user, [id]: e.target.value });
  };

  const handleCheck = (e) => {
    const id = e.target.id;
    setUser({ ...user, [id]: !user[id] });
  };

  const handlePercent = () => {
    let itemFilledCount = 0;
    for (let el in user) {
      if (user[el]) itemFilledCount += 1;
    }
    let percent = (itemFilledCount / 7) * 100;
    return percent.toFixed(0);
  };

  return (
    <>
      <form className='form-container'>
        <h2 className='main-title'>Full Name</h2>
        <h3>Percent Complete: {handlePercent()}% </h3>
        <div className='single-inputs'>
          <TextInput
            input={firstName}
            user={user}
            handleChange={handleChange}
          />
          <br />
          <CheckBoxInput input={hasMiddleName} handleCheck={handleCheck} />
          {user.hasMiddleName && (
            <>
              <br />
              <label htmlFor={middleName.id}> {middleName.label}:</label>
              <input
                id={middleName.id}
                type={middleName.type}
                placeholder={middleName.definition}
                value={user.middleName}
                onChange={handleChange}
              />
            </>
          )}
          <br />
          <TextInput input={lastName} user={user} handleChange={handleChange} />
        </div>
        <h2 className='main-title'>Home Address</h2>
        <div className='single-inputs'>
          <TextInput input={address1} user={user} handleChange={handleChange} />
          <br />
          <CheckBoxInput input={apartmentOrSuite} handleCheck={handleCheck} />
          {user.apartmentOrSuite && (
            <>
              <br />
              <label htmlFor={address2.id}> {address2.label}:</label>
              <input
                id={address2.id}
                type={address2.type}
                placeholder={address2.definition}
                value={user.address2}
                onChange={handleChange}
              />
            </>
          )}
          <br />
          <TextInput input={city} user={user} handleChange={handleChange} />
          {user.city && user.city.length !== 0 && (
            <SelectInput input={state} handleChange={handleChange} />
          )}
          <br />
          <label htmlFor={country.id}> {country.label}:</label>
          <select id={country.id} type={country.type} onChange={handleChange}>
            <option value='Country' selected>
              Choose a Country
            </option>
            {country.sourceList.map((country) => {
              return <option value={country.name}>{country.name}</option>;
            })}
          </select>
          <br />
          {user.state && user.country && (
            <>
              <label htmlFor={zipCode.id}> {zipCode.label}:</label>
              <input
                id={zipCode.id}
                type={zipCode.type}
                placeholder={zipCode.definition}
                value={user.zipCode}
                onChange={handleChange}
              />
            </>
          )}
        </div>
      </form>
    </>
  );
};
export default DynamicForm;
