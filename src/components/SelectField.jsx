import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

import checkDependency from "../utils/helper";
import { states, countries } from "../mock/statesAndCountries";

const SelectField = (props) => {
  const {
    label,
    id,
    definition,
    control,
    errors,
    dependencies = {},
    sourceList,
    getValues,
  } = props;

  const transformedValue = sourceList.map((item) => ({
    value: id === "state" ? item.toLowerCase() : item.code,
    label: id === "state" ? item : item.name,
  }));

  //   const transformedCountries = sourceList.map((item) => ({
  //     value: item.code,
  //     label: item.name,
  //   }));

  //   const options = id === "state" ? transformedStates : transformedCountries;
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
            as={Select}
            name={id}
            control={control}
            options={transformedValue}
            rules={{
              required: true,
            }}
          />
          {errors[id] && <p>{definition}</p>}
        </>
      )}
    </>
  );
};

export default SelectField;
