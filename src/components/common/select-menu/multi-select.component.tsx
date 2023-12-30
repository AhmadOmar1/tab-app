import { Chip, FormControl, MenuItem, Select, SelectChangeEvent, SelectProps, Stack } from "@mui/material";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";

type MultiSelectProps = {
  options: string[];
  value: string[]; 
  onChange: (value: string[]) => void; 
} & SelectProps;

const MultiSelect: React.FC<MultiSelectProps> = ({ options, value, onChange }) => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    onChange(event.target.value as string[]);
  };

  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <Select
        multiple
        displayEmpty
        value={value}
        onChange={handleChange}
        renderValue={(selected) => (
          <Stack gap={1} direction="row" flexWrap="wrap">
            {selected.map((selectedValue) => (
              <Chip
                key={selectedValue}
                label={selectedValue as string}
                onDelete={() =>
                  onChange(value.filter((item) => item !== selectedValue))
                }
                deleteIcon={
                  <CancelIcon
                    onMouseDown={(event) => event.stopPropagation()}
                  />
                }
              />
            ))}
          </Stack>
        )}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            value={option}
            sx={{ justifyContent: "space-between" }}
          >
            {option}
            {value.includes(option) ? <CheckIcon color="info" /> : null}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelect;
