import './App.css';

import Form from 'Components/Form';
import formData from './data';

console.log(formData);

export default function App() {
  return (
    <>
      <Form data={formData} />
    </>
  );
}
