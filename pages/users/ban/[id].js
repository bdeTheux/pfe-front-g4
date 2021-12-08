import { users } from "../../../data";

//api fictive

export default function handler({ query: { id } }, res) {
  res.status(200).json(users);
}
