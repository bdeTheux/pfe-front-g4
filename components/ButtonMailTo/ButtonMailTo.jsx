import { MailIcon } from "@heroicons/react/outline";
import Link from "next/link";
const ButtonMailTo = ({ mailto, title }) => {
  //add post to param
  const ref = `mailto:${mailto}?subject=Achat ${title}`;
  return (
    <div>
      <Link href={ref} passHref={true}>
        <a className="flex justify-between ml-auto text-black font-mono bg-yellow-500 shadow border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 tracking-wider rounded">
          Envoyer un mail <MailIcon className="w-6 h-6 text-white ml-2" />
        </a>
      </Link>
    </div>
  );
};

export default ButtonMailTo;
