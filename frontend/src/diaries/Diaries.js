import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import DiaryItem from './DiaryItem';
import { getAllPosts } from '../api-helpers/helpers';

const Diaries = () => {
  useEffect(() => {
    getAllPosts()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
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
