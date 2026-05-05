import React from 'react';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
const linksArray = ['Home', 'Diaries', 'Auth'];
const Header = () => {
  const [value, setValue] = React.useState(0);
  return (
    <AppBar sx={{ backgroundColor: 'transparent' }}>
      <Toolbar>
        <ModeOfTravelIcon sx={{ color: 'black' }} />
        <Tabs
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{ ml: 'auto', textDecoration: 'none' }}
        >
          {linksArray.map((link, index) => (
            <Tab
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
