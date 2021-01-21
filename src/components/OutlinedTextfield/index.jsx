import React from "react";
import styled from "styled-components";
import Field from "@material-ui/core/TextField";

const TextField = styled(Field)`
    width: 100%;
    height: 56px;
    margin-top: ${(props) => props.marginTop};
`;

const OutlinedTextField = (props) => {
    const {
        disabled = false,
        value,
        required = false,
        type = null,
        error,
        id = "standard-textfields",
        label = "Enter Something",
        placeholder = "eg: john@xsolarsystems.com",
        onChange: setText,
        marginTop = "32px !important",
        textfieldType = null,
    } = props;
    console.log(error);
    return (
        <TextField
            disabled={disabled}
            type={textfieldType || "text"}
            required={required}
            textfieldType={type}
            error={error}
            id={id}
            value={value}
            label={label}
            placeholder={placeholder}
            variant="outlined"
            marginTop={marginTop}
            helperText={error ? "Incorrect entry." : ""}
            onChange={(event) => {
                const textValue = event.target.value;
                if (setText) setText(id, textValue.substr(0, 40));
            }}
        // InputLabelProps={{ shrink: true }}
        />
    );
};

export default OutlinedTextField;
