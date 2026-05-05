import React from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import { Link } from 'react-router-dom';

const linksArray = ['home', 'diaries', 'auth'];

const Header = () => {
  const [value, setValue] = React.useState(0);
  return (
    <AppBar sx={{ backgroundColor: 'transparent', position: 'sticky' }}>
      <Toolbar>
        <ModeOfTravelIcon sx={{ color: 'black' }} />
        <Tabs
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{ ml: 'auto', textDecoration: 'none' }}
        >
          {linksArray.map((link, index) => (
            <Tab
              component={Link}
              to={link === 'home' ? '/' : `/${link}`}
              sx={{
                textDecoration: 'none',
                ':hover': {
                  textDecoration: 'underline',
                  textUnderlineOffset: '18px',
                },
              }}
              key={link}
              label={link}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
