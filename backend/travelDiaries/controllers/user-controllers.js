import User from '../models/User';

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
