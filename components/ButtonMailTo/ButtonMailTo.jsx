import { MailIcon } from "@heroicons/react/outline";
import Link from "next/link";
const ButtonMailTo = ({ mailto, title }) => {
  //add post to param
  const ref = `mailto:${mailto}?subject=Achat ${title}`;
  return (
    <div>
      <Link href={ref} passHref={true}>
        <a className="flex justify-between ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
          Envoyer un mail <MailIcon className="w-6 h-6 text-white ml-2" />
        </a>
      </Link>
    </div>
  );
};

export default ButtonMailTo;
