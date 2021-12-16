import Link from "next/link";
import { SpeakerphoneIcon } from "@heroicons/react/outline";
import CountCloture from "../../components/CountCloture/CountCloture";

const WelcomeBanner = ({ post }) => {
  return (
    <div className="relative lg:mt-20 mt-30 w-screen bg-yellow-400">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <span className="flex p-2 bg-yellow-600 rounded-lg hidden md:block">
            <SpeakerphoneIcon
              className="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </span>
          <p className="text-center  italic ml-3 font-thin truncate md:inline select-none">
            « Nous avons tous des trésors enfouis au fond de notre grenier ou de
            nos placards.
            <br />
            Trésors qui profiteraient à d’autres.
            <br />
            Valorisons-les en leur donnant une seconde vie. »
          </p>
          <div className="order-3 mt-2 flex-shrink-0 w-full md:order-2 md:mt-0 md:w-auto">
            <Link href="/about">
              <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-yellow-500 bg-white hover:bg-indigo-50">
                En savoir plus
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
