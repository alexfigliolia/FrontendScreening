import React from 'react';

const CheckBoxInput = ({ input, handleCheck }) => {
  return (
    <div className='check-box-container'>
      <label htmlFor={input.id}> {input.label}</label>
      <input
        className='check-box'
        onClick={handleCheck}
        id={input.id}
        type={input.type}
      />
    </div>
  );
};

export default CheckBoxInput;
