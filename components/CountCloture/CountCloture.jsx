import { useState } from "react";
const CountCloture = () => {
  const [countCloture, setCountCloture] = useState(0);
  fetch("/posts/")
    .then((res) => res.json())
    .then((count) => setCountCloture(count));
  return <></>;
};
