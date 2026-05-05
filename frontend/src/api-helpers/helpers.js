import axios from 'axios';

export const getAllPosts = async () => {
  const res = await axios.get('http://localhost:5000/posts');
  if (res.status !== 200) throw new Error('Failed to fetch posts');
  return res.data;
};
