import styled from "styled-components";
import Form from "@material-ui/core/FormControl";

export const Wrapper = styled.div`
  margin-top: 32px;
`;

export const FormControl = styled(Form)`
  width: ${(props) => props.width} !important;
  .MuiInputLabel-shrink {
    padding-right: 7px !important;
  }

  .Mui-focused {
    div fieldset legend {
      width: 7px !important;
    }
  }
`;
