import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import style from './search-bar.module.css';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
  width?: string;
  red?:boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({red, placeholder = 'Search...', onSearch, width = '700px' }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleIconClick = () => {
    onSearch(searchTerm);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
      <TextField
        id="search"
        sx={{ width }}
        type="search"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        InputProps={{
          style: { borderRadius: '50px' }
          ,
          endAdornment: (
            <InputAdornment position="end" >
              <SearchIcon fontSize="large" style={{cursor:"pointer"}} className={red ? style.searchIcon : ''} onClick={handleIconClick} />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default SearchBar;
