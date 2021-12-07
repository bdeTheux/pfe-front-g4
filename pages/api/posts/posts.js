import { posts, users } from "../../../data";

//api fictive

export default function handler(req, res) {
  res.status(200).json(posts);
}
