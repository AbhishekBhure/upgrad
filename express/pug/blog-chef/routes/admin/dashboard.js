import { getFlaggedPosts } from "../../controllers/post";
import moment from "moment";

export default async (req, res) => {
  const getPosts = await getFlaggedPosts();
  res.render("dashboard", {
    user: req.session.user.name,
    lastLoggedIn: moment(req.session.user.lastLoggedIn).format(
      "MMMM, Do YYYY, h:mm:ss a"
    ),
    posts: getPosts,
  });
};
