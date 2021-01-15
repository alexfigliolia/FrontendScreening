import React from "react";

import InputField from "./InputField";
import SelectField from "./SelectField";
import Checkbox from "./Checkbox";

const FormSection = ({
  data,
  control,
  errors,
  hasMiddleName,
  hasApartmentOrSuite,
  getValues,
}) => {
  const { type, label, id, definition, mask, dependencies, sourceList } = data;
  return (
    <>
      {
        {
          text: (
            <InputField
              type={type}
              label={label}
              id={id}
              definition={definition}
              mask={mask}
              control={control}
              errors={errors}
              dependencies={dependencies}
              getValues={getValues}
            />
          ),
          number: (
            <InputField
              type={type}
              label={label}
              id={id}
              definition={definition}
              mask={mask}
              control={control}
              errors={errors}
              dependencies={dependencies}
              getValues={getValues}
            />
          ),
          select: (
            <SelectField
              label={label}
              id={id}
              definition={definition}
              control={control}
              errors={errors}
              dependencies={dependencies}
              getValues={getValues}
              sourceList={sourceList}
            />
          ),
          checkbox: <Checkbox id={id} label={label} control={control} />,
        }[type]
      }
    </>
  );
};

export default FormSection;
