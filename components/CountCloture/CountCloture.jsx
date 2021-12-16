import { useState } from "react";
const CountCloture = () => {
  const [countCloture, setCountCloture] = useState(0);
  fetch("/api/posts/closedpostsamount")
    .then((res) => res.json())
    .then((count) => setCountCloture(count));
  return (
    <p className="text-white italic font-light">
      Jusqu'ici,
      <strong className="font-extrabold not-italic text-xl text-yellow-600 bg-white px-2 rounded-full">
        {countCloture}
      </strong>
      objets ont eu droit à une seconde vie !
      <span role="img" aria-label="bee"> 🐝</span>
    </p>
  );
};

export default CountCloture;
