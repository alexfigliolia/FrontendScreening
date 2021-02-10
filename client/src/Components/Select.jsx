import React from 'react';

export default function Select({
  fieldData,
  onChange,
  sectionName,
  formSectionData
}) {
  const handleChange = (e) => {
    const { value } = e.target;
    const updatedField = { ...fieldData, value };

    if (fieldData.mask) {
      const isValid = new RegExp(fieldData.mask).test(value);
      updatedField.valid = isValid;
    } else {
      updatedField.valid = value.length > 0;
    }

    onChange({
      sectionName,
      updatedField,
      valid: updatedField.valid,
      name: fieldData.id
    });
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
      <select id={fieldData.id} onChange={handleChange}>
        {fieldData.sourceList.map((itemData, index) => (
          <option key={index} value={itemData.code || itemData}>
            {itemData.name || itemData}
          </option>
        ))}
      </select>
    </div>
  );
}
