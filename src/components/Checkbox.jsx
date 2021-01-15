import React from "react";
import { Checkbox } from "antd";
import { Controller } from "react-hook-form";

const InputField = (props) => {
  const { id, label, control } = props;

  return (
    <Controller
      name={id}
      control={control}
      render={(props) => (
        <Checkbox
          onChange={(e) => props.onChange(e.target.checked)}
          checked={props.value}
        >
          {label}
        </Checkbox>
      )}
    />
  );
};

export default InputField;
