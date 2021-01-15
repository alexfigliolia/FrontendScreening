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
}) => {
  const { type, label, id, definition, mask, dependencies } = data;
  return (
    <>
      {
        {
          text: (
            <InputField
              label={label}
              id={id}
              definition={definition}
              mask={mask}
              control={control}
              errors={errors}
              dependencies={dependencies}
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
            />
          ),
          checkbox: <Checkbox id={id} label={label} control={control} />,
        }[type]
      }
    </>
  );
};

export default FormSection;
