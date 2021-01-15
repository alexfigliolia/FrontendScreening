import React from "react";
import { Input } from "antd";
import { Controller } from "react-hook-form";

import checkDependency from "../utils/helper";

const InputField = (props) => {
  const {
    type,
    label,
    id,
    definition,
    mask,
    control,
    errors,
    dependencies = {},
    getValues,
  } = props;
  const condition =
    Object.keys(dependencies).length > 0
      ? checkDependency(dependencies, getValues)
      : true;
  return (
    <>
      {condition && (
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
      )}
    </>
  );
};

export default InputField;
