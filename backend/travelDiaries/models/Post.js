import mongoose, { Schema } from 'mongoose';
const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  user: { type: String, required: true },
});
export default mongoose.model('Post', postSchema);
