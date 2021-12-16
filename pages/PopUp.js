import { useState } from "react";
import PopUpUpdatePost from "../components/PopUp/PopUpUpdatePost";

const PopUp = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <button
        className="mt-2 md:mt-28 md:px-10 mx-10 md:mx-20 lg:mx-80"
        onClick={handleShow}
      >
        {" "}
        Open
      </button>
      {show ? <PopUpUpdatePost setShow={setShow} /> : null}
      <div id="link"></div>
    </div>
  );
};

export default PopUp;
