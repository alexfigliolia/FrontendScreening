import React, { useState, useEffect } from 'react';
import useDependentInput from './useDependentInput';

export default function Select({
  fieldData,
  onChange,
  sectionName,
  formSectionData,
  totalInputsMap,
  setTotalInputsMap
}) {
  const [value, setValue] = useState('');

  const { showDependentInput } = useDependentInput({
    formSectionData,
    fieldData,
    sectionName
  });

  const handleChange = (e) => {
    const { value } = e.target;

    const updatedField = { ...fieldData, value, code: value };

    if (fieldData.mask) {
      const isValid = new RegExp(fieldData.mask).test(value);
      updatedField.valid = isValid || value.length > 0; // hack here to fix the input regex's not being valid unless there is a space in the input
    } else {
      updatedField.valid = value.length > 0;
    }

    setValue(value);
    onChange({
      sectionName,
      updatedField,
      fieldData
    });
  };

  useEffect(() => {
    if (fieldData.dependencies) {
      if (showDependentInput) {
        setTotalInputsMap({ ...totalInputsMap, [fieldData.id]: true });
        // setCompletedInputs((prev) => prev - 1);
      } else {
        const updatedInputsMap = { ...totalInputsMap };
        delete updatedInputsMap[fieldData.id];
        setTotalInputsMap(updatedInputsMap);
        // setCompletedInputs((prev) => prev + 1);
      }
    }
  }, [showDependentInput]);

  if (!showDependentInput) {
    return null;
  }

  return (
    <div className={`field-wrapper ${fieldData.type}`}>
      <label htmlFor={fieldData.id}>{fieldData.label}</label>
      <select id={fieldData.id} onChange={handleChange}>
        {!value && <option hidden={true}>Select...</option>}

        {fieldData.sourceList.map((itemData, index) => (
          <option key={index} value={itemData.code || itemData}>
            {itemData.name || itemData}
          </option>
        ))}
      </select>
    </div>
  );
}
