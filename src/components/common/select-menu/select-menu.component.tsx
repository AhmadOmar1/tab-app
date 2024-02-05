import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, {SelectProps } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

type SingleSelectCheckmarksProps = {
  choices: string[];
  value: string;
  onChange: (value: string) => void;
} & SelectProps;

const SingleSelectCheckmarks: React.FC<SingleSelectCheckmarksProps> = ({ choices, value, onChange }) => {

  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <Select
        labelId="demo-single-checkbox-label"
        id="demo-single-checkbox"
        value={value}
        onChange={(event) => onChange(event.target.value as string)}
        renderValue={(selected) => selected as string}
      >
        {choices.map((choice) => (
          <MenuItem key={choice} value={choice}>
            <Checkbox checked={value === choice} />
            <ListItemText primary={choice} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SingleSelectCheckmarks;
