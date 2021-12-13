import { useState } from "react";
import PopUpUpdatePost from "../PopUp/PopUpUpdatePost";
import { PencilIcon } from "@heroicons/react/outline";

const PopUpButton = ({ token, post }) => {
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
        className="flex-initial items-center px-4 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-green-200 hover:fill-current hover:text-green-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
        onClick={handleShow}
      >
        <PencilIcon className="flex ml-3 w-6 text-green-500" />
        Modifier
      </button>
      {show ? <PopUpUpdatePost post={post} setShow={setShow} /> : null}
      <div id="link"></div>
    </div>
  );
};

export default PopUpButton;
