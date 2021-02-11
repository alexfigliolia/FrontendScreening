import React, { useEffect } from 'react';
import useDependentInput from './useDependentInput';

export default function Input({
  formSectionData,
  fieldData,
  onChange,
  sectionName,
  totalInputsMap,
  setTotalInputsMap
}) {
  const { showDependentInput } = useDependentInput({
    formSectionData,
    fieldData,
    sectionName
  });

  const handleChange = (e) => {
    const { value, checked, type } = e.target;
    const updatedField = {
      ...fieldData,
      value: type === 'checkbox' ? checked : value
    };

    if (fieldData.mask) {
      const isValid = new RegExp(fieldData.mask).test(value);
      updatedField.valid = isValid || value.length > 0; // hack here to fix the input regex's not being valid unless there is a space in the input
    } else {
      if (type === 'checkbox') {
        updatedField.valid = checked;
      } else {
        updatedField.valid = value.length > 0;
      }
    }

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

      console.error({ showDependentInput, fieldData });
    }
  }, [showDependentInput]);

  if (!showDependentInput) {
    return null;
  }

  return (
    <div className={`field-wrapper ${fieldData.type}`}>
      <label htmlFor={fieldData.id}>{fieldData.label}</label>
      <input
        className={`input ${fieldData.type}`}
        placeholder={fieldData.label}
        type={fieldData.type}
        id={fieldData.id}
        onChange={handleChange}
        name={fieldData.id}
        data-section={sectionName}
      />
    </div>
  );
}
