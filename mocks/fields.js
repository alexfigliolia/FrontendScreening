// eslint-disable-next-line no-useless-escape
const nameRegex = new RegExp(/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/).source;
const numberRegex = new RegExp(/^\d+$/).source;

const fields = {
  'Full Name': [
    {
      type: 'text',
      label: 'First Name',
      mask: nameRegex,
      id: 'firstName',
      definition: 'Please provide your first name'
    },
    {
      type: 'checkbox',
      label: 'Do you have a middle name?',
      id: 'hasMiddleName',
      definition: 'Do you have a middle name?'
    },
    {
      type: 'text',
      label: 'Middle Name',
      mask: nameRegex,
      id: 'middleName',
      definition: 'Please provide your middle name',
      dependencies: { hasMiddleName: [true] }
    },
    {
      type: 'text',
      label: 'Last Name',
      mask: nameRegex,
      id: 'lastName',
      definition: 'Please provide your last name'
    },
  ],
  'Home Address': [
    {
      type: 'text',
      label: 'Address 1',
      id: 'address1',
      definition: 'Please provide your street address'
    },
    {
      type: 'checkbox',
      label: 'Do you live in an apartment or suite?',
      id: 'apartmentOrSuite',
      definition: 'Do you live in an apartment or suite?'
    },
    {
      type: 'text',
      label: 'Address 2',
      id: 'address2',
      definition: 'Please provide your apartment or suite number',
      dependencies: { apartmentOrSuite: [true] }
    },
    {
      type: 'text',
      label: 'City',
      mask: nameRegex,
      id: 'city',
      definition: 'Please provide your city'
    },
    {
      type: 'select',
      label: 'State',
      id: 'state',
      definition: 'Please provide your state', sourceList: 'states',
      dependencies: { state: [true] }
    },
    {
      type: 'select',
      label: 'Country',
      id: 'country',
      definition: 'Please provide your country', sourceList: 'countries'
    },
    {
      type: 'number',
      label: 'Zipcode',
      mask: numberRegex,
      id: 'zipCode',
      definition: 'Please provide your zipcode',
      dependencies: {
        state: [true],
        country: ['US']
      }
    },
  ],
};

module.exports = fields;
