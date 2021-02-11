import { useCallback } from 'react';

export default function useDependentInput({
  formSectionData,
  fieldData,
  sectionName
}) {
  const handleDependencies = useCallback(() => {
    if (!fieldData.dependencies) return true;

    const dependencyErrors = [];

    for (let dependency in fieldData.dependencies) {
      const dependencyData =
        formSectionData && formSectionData[sectionName][dependency];

      console.log({ dependencyData });

      if (formSectionData) {
        if (typeof fieldData.dependencies[dependency] === 'boolean') {
          const valid =
            dependencyData.value === fieldData.dependencies[dependency];

          if (!valid) {
            dependencyErrors.push(dependency);
          }
        }

        if (typeof fieldData.dependencies[dependency] === 'function') {
          const valid = fieldData.dependencies[dependency](
            dependency === 'country' ? dependencyData : dependencyData.value
          );

          if (!valid) {
            dependencyErrors.push(dependency);
          }
        }
      }
    }

    return dependencyErrors.length > 0 ? false : true;
  }, [formSectionData]);

  return { showDependentInput: handleDependencies() };
}
