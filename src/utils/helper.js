import map from "lodash/map";

const checkDependency = (dependencies, getValues) => {
  let res = null;
  if (dependencies && Object.keys(dependencies).length > 0) {
    const formState = getValues();
    map(dependencies, (value, key) => {
      if (typeof value === "function") {
        if (res === false) return;
        res = value(formState[key]);
      } else {
        res = dependencies[key] === formState[key];
      }
    });
  }
  return res;
};

export default checkDependency;
