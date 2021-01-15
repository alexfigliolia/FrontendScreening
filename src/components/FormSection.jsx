import React from "react";

import InputField from "./InputField";
import SelectField from "./SelectField";
import Checkbox from "./Checkbox";

const FormSection = (data) => {
  const { type, label, id, definition, mask } = data;
  return (
    <InputField
      type={type}
      label={label}
      id={id}
      definition={definition}
      mask={mask}
    />
  );
};

export default FormSection;
