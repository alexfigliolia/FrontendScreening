import React from "react";
import { CheckBox, WhiteCircle } from "./index.styled.components";

const CheckboxComponent = (props) => {
  const { active } = props;
  return <CheckBox isActive={active}>{active && <WhiteCircle />}</CheckBox>;
};

export default CheckboxComponent;
