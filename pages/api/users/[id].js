import { users } from "../../../data";
export default function handler({ query: { id } }, res) {
  const filtered = users.filter((user) => user.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `L'utilisateur avec l'id ${id} n'existe pas` });
  }
}
