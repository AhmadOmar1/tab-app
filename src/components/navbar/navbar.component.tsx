import React from 'react';
import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import TabIcon from "../../assets/icons/tab-icon.component";

interface Page {
  label: string;
  route: string;
}

interface NavbarProps {
  pages: Page[];
}

const Navbar: React.FC<NavbarProps> = ({ pages }) => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <TabIcon width="50px" height="40px" />
        </IconButton>
        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ flexGrow: 1 }}>
          {pages.map((page) => (
            <Button key={page.label} color="inherit" component={Link} to={page.route}>
              {page.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
