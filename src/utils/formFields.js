import React from "react";
import { TextField, MenuItem,FormControlLabel,Checkbox } from "@material-ui/core";
export const FormFields = ({ formData, change, name }) => {
  const renderTemplate = () => {
    let formTemplate = null;
    switch (formData.type) {
      case "text":
        formTemplate = (
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            type="text"
            placeholder={formData.definition}
            id={formData.id}
            label={formData.label || ""}
            value={formData.value || ""}
            onChange={event => change(formData.id,event.target.value,name)}
            helperText={formData.errorMessage}
            error={!!formData.errorMessage}
          />
        );
        break;
        case "number":
        formTemplate = (
          <TextField
            variant="outlined"
            margin="normal"
            type="number"
            fullWidth
            placeholder={formData.definition}
            id={formData.id}
            label={formData.label || ""}
            value={formData.value || ""}
            onChange={event => change(formData.id,event.target.value,name)}
            helperText={formData.errorMessage}
            error={!!formData.errorMessage}
          />
        );
        break;
      case "checkbox":
        formTemplate = (
          <FormControlLabel
          value={formData.value || false}
          onChange={event => change(formData.id,event.target.checked,name)}
          control={<Checkbox color="primary" />}
          label={formData.label}
          id={formData.id}
          labelPlacement="end"
        />
        );
        break;
      case "select":
        formTemplate = (
          <TextField
          select
          variant="outlined"
            margin="normal"
            fullWidth
            placeholder={formData.definition}
            id={formData.id}
            label={formData.label || ""}
            value={formData.value || ""}
            onChange={event => change(formData.id,event.target.value,name)}
            helperText={formData.errorMessage}
            error={!!formData.errorMessage}
          >
            {formData.sourceList.map((item) => (
               typeof(item) ==='object' ?
               <MenuItem key={item.name} value={item}>{item.name}</MenuItem>
               : <MenuItem key={item} value={item}>{item}</MenuItem>
             ))}
          </TextField>
        );
        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  };
  return <div>{renderTemplate()}</div>;
};