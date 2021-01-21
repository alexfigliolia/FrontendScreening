import React from "react";
import styled from "styled-components";
import { Loader, Button } from "./index.styled.component";

const PrimaryButton = (props) => {
  const {
    label,
    disabled = false,
    loading,
    onClick: handleOnClick,
    icon = null,
    size = "large",
    marginTop = "0",
    padding = "0",
    textCase = "uppercase",
  } = props;

  const Icon = styled(icon || "div")`
    height: 20px;
    margin-left: 10px;
  `;

  return (
    <Button
      onClick={handleOnClick}
      disabled={loading || disabled}
      size={size}
      marginTop={marginTop}
      padding={padding}
    >
      {label} {loading && <Loader />} {Icon && <Icon />}
    </Button>
  );
};

export default PrimaryButton;
