import React from 'react';

const TextInput = ({ input, user, handleChange }) => {
  return (
    <>
      <label htmlFor={input.id}> {input.label}:</label>
      <input
        id={input.id}
        type={input.type}
        placeholder={input.definition}
        onChange={handleChange}
        value={user.input}
      />
    </>
  );
};

export default TextInput;
