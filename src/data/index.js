const stuff = require('./statesAndCountries');

const { states, countries } = stuff;

const nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
const numberRegex = /^\d+$/;

export const formData = [
  {
    key: "fullname",
    name: "Full Name",
    fields: [
      {
        type: 'text',
        label: 'First Name',
        mask: nameRegex,
        key: 'firstName',
        definition: 'Please provide your first name'
      },
      {
        type: 'checkbox',
        label: 'Do you have a middle name?',
        key: 'hasMiddleName',
        definition: 'Do you have a middle name?'
      },
      {
        type: 'text',
        label: 'Middle Name',
        mask: nameRegex,
        key: 'middleName',
        definition: 'Please provide your middle name',
        dependencies: [
          {
            key: 'hasMiddleName',
            validation: hasMiddleName => hasMiddleName ? true : false
          }
        ]
      },
      {
        type: 'text',
        label: 'Last Name',
        mask: nameRegex,
        key: 'lastName',
        definition: 'Please provide your last name'
      },
    ],
  },
  {
    key: "homeaddress",
    name: "Home Address",
    fields: [
      {
        type: 'text',
        label: 'Address 1',
        key: 'address1',
        definition: 'Please provide your street address'
      },
      {
        type: 'checkbox',
        label: 'Do you live in an apartment or suite?',
        key: 'apartmentOrSuite',
        definition: 'Do you live in an apartment or suite?'
      },
      {
        type: 'text',
        label: 'Address 2',
        key: 'address2',
        definition: 'Please provide your apartment or suite number',
        dependencies: [
          {
            key: 'apartmentOrSuite',
            validation: apartmentOrSuite => apartmentOrSuite ? true : false
          }
        ]
      },
      {
        type: 'text',
        label: 'City',
        mask: nameRegex,
        key: 'city',
        definition: 'Please provide your city'
      },
      {
        type: 'select',
        label: 'State',
        key: 'state',
        definition: 'Please provide your state', sourceList: states,
        dependencies: [
          { 
            key: 'city',
            validation: city => city && city.length !== 0 
          }
        ]
      },
      {
        type: 'select',
        label: 'Country',
        key: 'country',
        definition: 'Please provide your country', sourceList: countries
      },
      {
        type: 'number',
        label: 'Zipcode',
        mask: numberRegex,
        key: 'zipCode',
        definition: 'Please provide your zipcode',
        dependencies: [
          { 
            key: 'country',
            validation: country => country === 'US' 
          }
        ]
      },
    ],
  }
]