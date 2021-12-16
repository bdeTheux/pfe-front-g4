import { useState } from "react";
const CountCloture = () => {
  const [countCloture, setCountCloture] = useState(0);
  fetch("/api/posts/closedpostsamount")
    .then((res) => res.json())
    .then((count) => setCountCloture(count));
  return (
    <p>Jusqu'ici, {countCloture} objets ont eu droit à une seconde vie !</p>
  );
};

export default CountCloture;
