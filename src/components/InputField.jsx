import React from "react";
import { Input } from "antd";
import { Controller } from "react-hook-form";

const InputField = (props) => {
  const { type, label, id, definition, mask, control, errors } = props;

  return (
    <>
      <label>{label}</label>
      <Controller
        as={Input}
        type={type}
        name={id}
        control={control}
        rules={{
          required: true,
          patter: mask,
        }}
      />
      {errors[id] && <p>{definition}</p>}
    </>
  );
};

export default InputField;
