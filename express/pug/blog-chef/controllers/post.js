import Post from "../models/post";

export const getAllPosts = () => {
  return Post.find({ isApproved: true }).populate("user", "name _id");
};

export const getPost = (id) => {
  return Post.findById(id).populate("user", "name _id");
};

export const createPost = ({ title, content, user }) => {
  return Post.create({ title, content, user });
};

export const deletePost = (id) => {
  return Post.findByIdAndDelete(id);
};

export const getFlaggedPosts = () => {
  return Post.find({ isApproved: false }).populate("user", "name _id");
};

export const approvePost = (id) => {
  return Post.findByIdAndUpdate(id, { isApproved: true });
};
