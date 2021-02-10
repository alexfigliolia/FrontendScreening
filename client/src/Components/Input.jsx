import React from 'react';

export default function Input({
  formSectionData,
  fieldData,
  onChange,
  sectionName
}) {
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const updatedField = {
      ...fieldData,
      value: type === 'checkbox' ? checked : value
    };

    if (fieldData.mask) {
      const isValid = new RegExp(fieldData.mask).test(value);
      updatedField.valid = isValid;
    } else {
      if (type === 'checkbox') {
        updatedField.valid = checked;
      } else {
        updatedField.valid = value.length > 0;
      }
    }

    onChange({ sectionName, updatedField, valid: updatedField.valid, name });
  };

  const handleDependencies = () => {
    for (let dependency in fieldData.dependencies) {
      // todo: needs to handle function dependencies
      if (formSectionData && !formSectionData[sectionName][dependency].valid) {
        return false;
      }
    }

    return true;
  };

  if (fieldData.dependencies && !handleDependencies()) {
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
