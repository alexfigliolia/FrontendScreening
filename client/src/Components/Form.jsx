import React, { useState, useEffect } from 'react';

import Input from './Input';
import ProgressBar from './ProgressBar';
import Select from './Select';

export default function Form({ data }) {
  const [formSectionData, setFormSectionData] = useState();
  const [completedInputs, setCompletedInputs] = useState(0);
  const [totalInputs, setTotalInputs] = useState();
  const [totalInputsMap, setTotalInputsMap] = useState({});

  useEffect(() => {
    const normalizedData = {};
    const inputsMap = {};

    for (let section in data) {
      data[section].forEach((field) => {
        if (!field.dependencies && field.type !== 'checkbox') {
          inputsMap[field.id] = true;
        }
        normalizedData[section] = {
          ...normalizedData[section],
          [field.id]: field
        };
      });
    }

    console.log(normalizedData);

    setTotalInputsMap(inputsMap);
    setFormSectionData(normalizedData);
  }, []);

  useEffect(() => {
    setTotalInputs(Object.keys(totalInputsMap).length);
  }, [totalInputsMap]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ... do something here like submit data to api
  };

  const handleChange = ({ sectionName, updatedField, fieldData }) => {
    if (fieldData.type !== 'checkbox') {
      if (
        updatedField.valid &&
        !formSectionData[sectionName][updatedField.id].valid
      ) {
        setCompletedInputs((prev) => prev + 1);
      } else if (
        !updatedField.valid &&
        formSectionData[sectionName][updatedField.id].valid
      ) {
        setCompletedInputs((prev) => prev - 1);
      }
    }

    setFormSectionData({
      ...formSectionData,
      [sectionName]: {
        ...formSectionData[sectionName],
        [updatedField.id]: updatedField
      }
    });
  };

  return (
    <div className="form-wrapper">
      <h1>Your information</h1>
      {totalInputs && (
        <ProgressBar
          completedInputs={completedInputs}
          totalInputs={totalInputs}
        />
      )}
      <form onSubmit={handleSubmit}>
        {Object.entries(data).map(([key, value]) => (
          <div className="form-section" key={key}>
            <h2>{key}</h2>
            {value.map((fieldData, index) => (
              <React.Fragment key={index}>
                {fieldData.type === 'select' ? (
                  <Select
                    fieldData={fieldData}
                    onChange={handleChange}
                    sectionName={key}
                    formSectionData={formSectionData}
                    setFormSectionData={setFormSectionData}
                    totalInputsMap={totalInputsMap}
                    setTotalInputsMap={setTotalInputsMap}
                  />
                ) : (
                  <Input
                    fieldData={fieldData}
                    onChange={handleChange}
                    sectionName={key}
                    formSectionData={formSectionData}
                    setFormSectionData={setFormSectionData}
                    totalInputsMap={totalInputsMap}
                    setTotalInputsMap={setTotalInputsMap}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </form>
    </div>
  );
}
