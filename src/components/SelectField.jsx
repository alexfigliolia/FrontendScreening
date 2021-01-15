import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

const SelectField = (props) => {
  const { label, id, definition, control, errors } = props;

  return (
    <>
      <label>{label}</label>
      <Controller
        as={Select}
        name={id}
        control={control}
        options={[]}
        rules={{
          required: true,
        }}
      />
      {errors[id] && <p>{definition}</p>}
    </>
  );
};

export default SelectField;
