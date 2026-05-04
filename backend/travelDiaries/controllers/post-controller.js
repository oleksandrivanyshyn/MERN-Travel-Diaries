import Post from '../models/Post';

export const getAllPosts = async (req, res) => {
  let posts;
  try {
    posts = await Post.find({});
  } catch (err) {
    return console.log(err);
  }

  if (!posts) {
    return res.status(500).json({ message: 'Unexpected Error Occurred' });
  }

  return res.status(200).json({ posts });
};
export const addPost = async (req, res) => {
  const { title, description, location, date, image, user } = req.body;

  if (
    !title ||
    title.trim() === '' ||
    !description ||
    description.trim() === '' ||
    !location ||
    location.trim() === '' ||
    !date ||
    !user ||
    !image ||
    image.trim() === ''
  ) {
    return res.status(422).json({ message: 'Invalid Data' });
  }

  let post;

  try {
    post = new Post({
      title,
      description,
      image,
      location,
      date: new Date(`${date}`),
      user,
    });

    await post.save();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Adding post failed' });
  }

  if (!post) {
    return res.status(500).json({ message: 'Unexpected Error Occurred' });
  }
  return res.status(201).json({ post });
};
