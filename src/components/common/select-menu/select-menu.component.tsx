import * as React from 'react';
import { SelectProps, InputLabel, MenuItem, FormControl, Box, Select } from '@mui/material';

type SelectMenuProps = {
  value: string;
  options: { value: string; label: string }[];
  width?: number;
} & SelectProps

const SelectMenu: React.FC<SelectMenuProps> = (props, {
  width = 200
}) => {

  return (
    <Box >
      <FormControl sx={{ width: { width }, minWidth: 200, }} >
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          {...props}
        >
          {props.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectMenu;
