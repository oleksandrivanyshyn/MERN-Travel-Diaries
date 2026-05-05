import React from 'react';
import { Box } from '@mui/system';
import { Button, FormLabel, TextField, Typography } from '@mui/material';

const Auth = () => {
  return (
    <Box
      width="40%"
      borderRadius={10}
      boxShadow={'5px 5px 10px #ccc'}
      margin="auto"
      marginTop={10}
    >
      <form action="">
        <Box
          display="flex"
          flexDirection="column"
          width="60%"
          padding={5}
          margin="auto"
        >
          <Typography variant="h4" textAlign="center">
            Login
          </Typography>
          <FormLabel>Name</FormLabel>
          <TextField margin="normal" />
          <FormLabel>Email</FormLabel>
          <TextField margin="normal" />
          <FormLabel>Password</FormLabel>
          <TextField margin="normal" />
          <Button sx={{ mt: 2 }} type="submit" variant="contained">
            Login
          </Button>
          <Button
            sx={{ mt: 2, borderRadius: 10 }}
            type="submit"
            variant="outlined"
          >
            Change to Signup
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
