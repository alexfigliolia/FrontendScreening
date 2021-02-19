import React, { useState, useEffect } from 'react';
import Form from './Form.jsx';
import Header from './Header.jsx';
import data from '../../data.js';
import styled from 'styled-components';

const App = () => {
  const [dataset, setDataset] = useState(data);

  return (
    <div>
      <Header />
      <Form nameData={dataset['Full Name']} addressData={dataset['Home Address']} />
    </div>
  )
}

export default App;
