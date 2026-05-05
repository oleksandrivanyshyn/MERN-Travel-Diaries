import { Box } from '@mui/system';
import React from 'react';
import DiaryItem from './DiaryItem';

const Diaries = () => {
  return (
    <Box
      display="flex"
      flexDirection={'column'}
      padding={3}
      justifyContent="center"
      alignItems={'center'}
    >
      <DiaryItem
        title="title"
        description="description"
        image="image"
        location="location"
        date="date"
        id="id"
        user="user"
        name="name"
      />
    </Box>
  );
};

export default Diaries;
