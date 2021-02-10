import React, { useState, useEffect } from 'react';

import Input from './Input';
import Select from './Select';

export default function Form({ data }) {
  const [formSectionData, setFormSectionData] = useState();
  const [completedInputs, setCompletedInputs] = useState(0);
  const [totalInputs, setTotalInputs] = useState();

  useEffect(() => {
    const normalizedData = {};
    let inputs = 0;

    for (let section in data) {
      inputs += data[section].length;

      data[section].forEach(
        (field) =>
          (normalizedData[section] = {
            ...normalizedData[section],
            [field.id]: field
          })
      );
    }

    console.log(normalizedData);

    setFormSectionData(normalizedData);
    setTotalInputs(inputs);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // ... do something here like submit data to api
  };

  const handleChange = ({ sectionName, updatedField, valid, name }) => {
    // needs a better way to track remaining inputs taking into account dependencies
    if (valid && !formSectionData[sectionName][name].valid) {
      setCompletedInputs((prev) => prev + 1);
    } else if (!valid && formSectionData[sectionName][name].valid) {
      setCompletedInputs((prev) => prev - 1);
    }

    setFormSectionData({
      ...formSectionData,
      [sectionName]: {
        ...formSectionData[sectionName],
        [name]: updatedField
      }
    });
  };

  return (
    <div className="form-wrapper">
      <h1>Your information</h1>
      <small>
        {totalInputs - completedInputs} fields remaining - estimated time:{' '}
        {/* Estimate each field will take 30 seconds to complete */}
        {Math.floor(((totalInputs - completedInputs) * 30) / 60)}
      </small>

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
                  />
                ) : (
                  <Input
                    fieldData={fieldData}
                    onChange={handleChange}
                    sectionName={key}
                    formSectionData={formSectionData}
                    setFormSectionData={setFormSectionData}
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
