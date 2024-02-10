import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import React from "react";

type SingleSelectCheckmarksProps = {
  choices: string[];
  value: string;
  onChange: (value: string) => void;
};

const SingleSelectCheckmarks: React.FC<SingleSelectCheckmarksProps> = ({
  choices,
  value,
  onChange,
}) => {
  const handleSelectionChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue === value ? "" : selectedValue);
  };

  const handleItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    clickedValue: string
  ) => {
    event.preventDefault();
    onChange(clickedValue === value ? "" : clickedValue);
  };

  return (
    <FormControl fullWidth>
      <Select
        labelId="demo-single-checkbox-label"
        id="demo-single-checkbox"
        value={value}
        onChange={handleSelectionChange}
        renderValue={(selected) => selected || "Select an option"}
      >
        {choices.map((choice) => (
          <MenuItem
            key={choice}
            value={choice}
            onClick={(event) => handleItemClick(event, choice)}
          >
            <Checkbox checked={value === choice} />
            <ListItemText primary={choice} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SingleSelectCheckmarks;
