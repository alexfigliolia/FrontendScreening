import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Form = ({ nameData, addressData }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [hasMiddleName, checkHasMiddleName] = useState(false);
  const [middleName, setMiddleName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [hasSecondAddress, checkHasSecondAddress] = useState()
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleNameChange = (e) => {
    e.preventDefault();
    if (e.target.id === 'firstName') {
      setFirstName(e.target.value);
    } else if (e.target.id === 'lastName') {
      setLastName(e.target.value);
    } else if (e.target.id === 'middleName') {
      setMiddleName(e.target.value);
    }
  };

  const handleAddressChange = (e) => {
    e.preventDefault();
    if (e.target.id === 'address1') {
      setAddress1(e.target.value);
    } else if (e.target.id === 'address2') {
      setAddress2(e.target.value);
    } else if (e.target.id === 'city') {
      setCity(e.target.value);
    } else if (e.target.id === 'state') {
      setState(e.target.value)
    } else if (e.target.id === 'country') {
      setCountry(e.target.value);
    } else if (e.target.id === 'zipCode') {
      setZipCode(e.target.value);
    }
  };

  const handleMiddleNameCheck = () => {
    checkHasMiddleName(!hasMiddleName);
  }

  const handlesSecondAddressCheck = () => {
    checkHasSecondAddress(!hasSecondAddress);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let userInfo = {
      firstName,
      lastName,
      middleName,
      address1,
      address2,
      city,
      state,
      country,
      zipCode
    }
  }

  return (
    <Container>
      <Buffer>
        <FormWrapper onSubmit={(e) => { handleSubmit(e) }}>
          <BreakPadding>
            <BreakHeader>Full Name</BreakHeader>
            <Break />
          </BreakPadding>
          {nameData.map((item, key) => {
            if (item.type === 'checkbox') {
              return (
                <PaddingDiv>
                  <CheckboxLabel> {item.label}
                    <Checkbox
                      type={item.type}
                      id={item.id}
                      onClick={() => handleMiddleNameCheck()}>
                    </Checkbox>
                  </CheckboxLabel>
                </PaddingDiv>
              )
            } else if (item.id === 'middleName' && !hasMiddleName) {
              return;
            } else {
              return (
                <PaddingDiv>
                  < Label > {item.label}
                    < Input
                      type={item.type}
                      id={item.id}
                      placeholder={item.definition}
                      pattern={item.mask}
                      onChange={(e) => { handleNameChange(e) }}
                      required>
                    </Input>
                  </Label>
                </PaddingDiv>
              )
            }
          })}

          <BreakPadding>
            <BreakHeader>Home Address</BreakHeader>
            <Break />
          </BreakPadding>

          {addressData.map((item, key) => {
            if (item.type === 'checkbox') {
              return (
                <PaddingDiv>
                  <CheckboxLabel> {item.label}
                    <Checkbox
                      type={item.type}
                      id={item.id}
                      onChange={(e) => { handlesSecondAddressCheck() }} >
                    </Checkbox>
                  </CheckboxLabel>
                </PaddingDiv>
              )
            } else if (item.type === 'select') {
              if (item.id === 'state') {
                return (
                  < PaddingDiv >
                    <Label> {item.label}
                      <Select
                        type={item.type}
                        id={item.id}
                        placeholder={item.definition}
                        onChange={(e) => { handleAddressChange(e) }}
                        required>
                        {item.sourceList.map((state) => {
                          return (
                            <option value={state}>
                              {state}
                            </option>
                          )
                        })}
                      </Select>
                    </Label>
                  </PaddingDiv>
                )
              } else if (item.id === 'country') {
                return (
                  < PaddingDiv >
                    <Label> {item.label}
                      <Select
                        type={item.type}
                        id={item.id}
                        placeholder={item.definition}
                        onChange={(e) => { handleAddressChange(e) }}
                        required>
                        {item.sourceList.map((country) => {
                          return (
                            <option id={country.code}>
                              {country.name}
                            </option>
                          )
                        })}
                      </Select>
                    </Label>
                  </PaddingDiv>
                )
              }
            } else if (item.id === 'address2' && !hasSecondAddress) {
              return;
            } else {
              return (
                <PaddingDiv>
                  <Label> {item.label}
                    <Input
                      type={item.type}
                      id={item.id}
                      placeholder={item.definition}
                      onChange={(e) => { handleAddressChange(e) }}
                      required>
                    </Input>
                  </Label>
                </PaddingDiv>
              )
            }
          })}
          <PaddingDiv>
            <Submit type="submit"></Submit>
          </PaddingDiv>
        </FormWrapper>
      </Buffer >
    </Container >
  )
}

export default Form;

const Select = styled.select`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 2px rgba(60,66,87,0.12);
  color: rgba(26,26,26,.7);
  display: block;
  font-size: 15px;
  padding: 12px 20px;
  margin: 8px 0;
  width: 100%;
`

const BreakHeader = styled.p`
  color: rgba(26,26,26,.7);
  font-size: 19px;
  font-weight: 500;
  margin: 0;
`

const BreakPadding = styled.div`
  display: block;
  padding: 1% 10.5%;
  text-align: center;
`

const Break = styled.hr`
  color: rgba(26,26,26,.1);
  margin: 0;
  width: 100%;
`
// potential accent color rgb(199,217,255)
const Container = styled.div`
  background-color: rgb(246, 248, 251);
  display: flex;
  justify-content: center;
  min-height: 800px;
`

const Buffer = styled.div`
  padding-top: 3%;
  padding-bottom: 10%;
  padding-left: 40%;
  padding-right: 40%;
`

const FormWrapper = styled.form`
  background-color: rgb(255,255,255);
  border-radius: 10px;
  box-shadow: 0px 0px 25px rgba(60,66,87,0.12);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 0px;
  min-height: 700px;
  min-width: 800px;
  padding-top: 5%;
  padding-bottom: 2%;
`

const PaddingDiv = styled.div`
  display: block;
  font-weight: 500;
  padding: 1% 8%;
`

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 2px rgba(60,66,87,0.12);
  color: rgba(26,26,26, .9);
  display: block;
  margin: 8px 0;
  padding: 12px 20px;
  width: 100%;
  font-size: 15px;
`

const Label = styled.label`
  color: rgba(26,26,26,.7);
  display: block;
  font-size: 18px;
  font-weight: 500;
`

const CheckboxLabel = styled.label`
  color: rgba(26,26,26,.7);
  display: flex;
  font-size: 18px;
  font-style: italic;
  font-weight: 500;
  justify-content: space-between;
`

const Checkbox = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  color: rgba(26,26,26,.7);
  display: flex;
  flex-direction: row;
  transform: scale(1.6);
`

const Submit = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: rgb(52, 49, 69);
  color: white;
  font-size: 25px;
  cursor: pointer;
`