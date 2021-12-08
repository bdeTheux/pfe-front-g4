import { users } from "../../../data";
export default function handler({ query: { id } }, res) {
  const filtered = users.filter((user) => user.id === id);
  console.log(
    "changement de statut " + filtered.is_banned + " en " + !filtered.is_banned
  );
}
