import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" style={{ flexGrow: 1 }}>
          Movie App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/bookmarks">
          Bookmarks
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
