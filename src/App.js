import React from "react";
import { useForm } from "react-hook-form";
import { Divider } from "antd";
import map from "lodash/map";

import FormSection from "./components/FormSection";

import data from "./mock/data";

const App = () => {
  const { control, handleSubmit, watch, getValues, errors } = useForm();
  const hasMiddleName = watch("hasMiddleName");
  const hasApartmentOrSuite = watch("apartmentOrSuite");

  const onSubmit = (data) => {
    console.log(data);
  };

  const labels = Object.keys(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {map(labels, (label) => (
        <>
          <Divider orientation="left">{label}</Divider>
          {map(data[label], (sectionData) => (
            <FormSection
              data={sectionData}
              control={control}
              errors={errors}
              getValues={getValues}
              hasMiddleName={hasMiddleName}
              hasApartmentOrSuite={hasApartmentOrSuite}
            />
          ))}
        </>
      ))}
      <input type="submit" />
    </form>
  );
};

export default App;
