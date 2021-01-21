import styled from "styled-components";

export const CheckBox = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
    props.isActive ? "#309b42" : "lightGrey"};
  background-color: ${(props) =>
    props.isActive ? "#309b42" : "transparent"};
`;

export const WhiteCircle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: white;
  top: 5px;
  left: 5px;
`;
