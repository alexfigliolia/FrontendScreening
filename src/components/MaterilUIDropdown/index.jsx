import React from "react";
import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Wrapper, FormControl } from "./index.styled.components";

const MaterialDropdown = (props) => {
  const {
    id,
    value = "",
    onOptionClick,
    disabled = false,
    width = "100%",
    height = "40px",
    loading = false,
    title = "Select",
    multiple = false,
    filterOptions = [],
  } = props;

  const handleOptionChange = (e) => {
    if (multiple) {
      const tempData = e.target.value.filter((item) => item !== "");
      onOptionClick(id, tempData);
    } else {
      if (e.target.value !== "") {
        onOptionClick(id, e.target.value);
      } else {
        onOptionClick(id, null);
      }
    }
  };

  const InputLabelComp = styled(InputLabel)`
    background: white;
    .Mui-focused {
      background: rgba(0, 0, 0, 0.05) !important;
    }
  `;

  return (
    <Wrapper>
      {!loading && (
        <FormControl
          variant="outlined"
          fullWidth
          width={width}
          height={height}
          disabled={disabled}
        >
          <InputLabelComp> {title} </InputLabelComp>
          <Select
            multiple={multiple}
            value={value}
            onChange={(e) => handleOptionChange(e)}
            label={title}
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            {filterOptions.map((item, index) => {
              return (
                <MenuItem value={item.name} id={item.code}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    </Wrapper>
  );
};

export default MaterialDropdown;
