import axios from 'axios';

export const getAllPosts = async () => {
  const res = await axios.get('/posts');
  if (res.status !== 200) throw new Error('Failed to fetch posts');
  return res.data;
};

export const sendAuthRequest = async (signup, data) => {
  const res = await axios
    .post(`/users/${signup ? 'signup' : 'login'}`, {
      ...data,
    })
    .catch((err) => console.log(err));
  if (res.status !== 200 && res.status !== 201)
    throw new Error('Authentication failed');
  return res.data;
};
export const addPost = async (data) => {
  const res = await axios
    .post('/posts/', {
      title: data.title,
      description: data.description,
      location: data.location,
      image: data.imageUrl,
      date: data.date,
      user: localStorage.getItem('userId'),
    })
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log('Error Occurred');
  }

  return res.data;
};
export const getPostDetails = async (id) => {
  const res = await axios.get(`/posts/${id}`).catch((err) => console.log(err));
  if (res.status !== 200) {
    return console.log('Unable to fetch diary');
  }

  return res.data;
};
