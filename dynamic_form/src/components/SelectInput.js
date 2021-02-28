import React from 'react';

const SelectInput = ({ input, handleChange }) => {
  return (
    <div>
      <br />
      <label htmlFor={input.id}> {input.label}:</label>
      <select id={input.id} type={input.type} onChange={handleChange}>
        <option value='State' selected>
          Choose a State
        </option>
        {input.sourceList.map((input) => {
          return <option value={input}>{input}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectInput;
