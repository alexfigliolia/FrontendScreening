import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Select, Checkbox } from "antd";
import map from "lodash/map";

const App = () => {
  const { control, handleSubmit, watch, errors } = useForm();
  const hasMiddleName = watch("hasMiddleName");
  const onSubmit = () => {
    console.log("success");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <Controller
        as={Input}
        name="firstName"
        control={control}
        defaultValue=""
        rules={{
          required: true,
          pattern: /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/,
        }}
      />
      {errors.firstName && <p>Please provide your first name</p>}
      <Controller
        name="Checkbox"
        control={control}
        render={(props) => (
          <Checkbox
            onChange={(e) => props.onChange(e.target.checked)}
            checked={props.value}
          >
            Do you have a middle name?
          </Checkbox>
        )}
      />
      {hasMiddleName && (
        <>
          <label>Middle Name</label>
          <Controller
            as={Input}
            name="middleName"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/,
            }}
          />
          {errors.middleName && <p>Please provide your middle name</p>}
        </>
      )}
    </form>
  );
};

export default App;
