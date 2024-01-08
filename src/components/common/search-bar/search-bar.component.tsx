import { InputAdornment, TextField, TextFieldProps, useTheme } from "@mui/material";
import { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from './search-bar.module.css';

const SearchBar: React.FC<TextFieldProps & { width?: number }> = (props) => {
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  const handleClick = () => {
    setExpanded(true);
  };

  const handleBlur = () => {
    setExpanded(false);
  };

  return (
    <TextField
      id="search"
      sx={{
        width: expanded ? '350px' : '300px',
        borderRadius: '50px',
        border: '1px solid',
        transition: 'all 0.2s ease-in-out',
        borderColor: theme.palette.primary.main,
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
      }}
      type="search"
      onClick={handleClick}
      onBlur={handleBlur}
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" >
            <SearchIcon fontSize="large" sx={{
              cursor: 'pointer',
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary.main,
              borderRadius: '50%',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                transform: 'rotate(180deg)',
              },
              '&:active': {
                backgroundColor: theme.palette.primary.light,
                transform: 'rotate(180deg)',
              },
            }}
              className={style.searchIcon}
            />
          </InputAdornment>
        ),
      }}
      inputRef={inputRef}
      autoFocus={expanded}
    />
  );
};

export default SearchBar;
