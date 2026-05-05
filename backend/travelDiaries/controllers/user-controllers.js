import User from '../models/User';
import bcrypt from 'bcryptjs';

export const getAllUsers = async (req, res) => {
  let users;
  try {
    users = await User.find({});
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users', error });
  }
  if (!users) return res.status(404).json({ message: 'No users found' });

  return res.status(200).json({ users });
};

export const getUserById = async (req, res) => {
  const id = req.params.id;

  let user;
  try {
    user = await User.findById(id).populate('posts');
  } catch (err) {
    return console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: 'No user found' });
  }

  return res.status(200).json({ user });
};

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  if (
    !name ||
    name.trim() === '' ||
    !email ||
    !email.includes('@') ||
    !password ||
    password.length < 6
  ) {
    return res
      .status(422)
      .json({ message: 'Invalid inputs passed, please check your data.' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password: hashedPassword });
  try {
    await user.save();
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Error saving user', error });
  }
  if (!user)
    return res.status(500).json({ message: 'Unexpected error occurred' });
  return res.status(201).json({ user });
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !email.includes('@') || !password || password.length < 6) {
    return res
      .status(422)
      .json({ message: 'Invalid inputs passed, please check your data.' });
  }
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ message: 'Error finding user', error });
  }
  if (!existingUser) return res.status(404).json({ message: 'User not found' });
  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid)
    return res.status(401).json({ message: 'Invalid credentials' });

  return res
    .status(200)
    .json({ message: 'Login successful', user: existingUser });
};
