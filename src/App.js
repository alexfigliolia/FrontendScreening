import React from "react";
import { useForm } from "react-hook-form";
import { Divider } from "antd";
import map from "lodash/map";

import InputField from "./components/InputField";

import data from "./mock/data";

const App = () => {
  const { control, handleSubmit, watch, errors } = useForm();
  const hasMiddleName = watch("hasMiddleName");
  const hasApartmentOrSuite = watch("apartmentOrSuite");

  const labels = Object.keys(data);

  const onSubmit = () => {
    console.log("success");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {map(labels, (label) => (
        <>
          <Divider orientation="left">{label}</Divider>
          {map(data[label], (sectionData) => (
            <InputField data={sectionData} />
          ))}
        </>
      ))}
      <input type="submit" />
    </form>
  );
};

export default App;
