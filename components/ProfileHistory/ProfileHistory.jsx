import { Tab } from "@headlessui/react";
import { CheckCircleIcon, ClockIcon, HandIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import HistoryDisclosure from "./HistoryDisclosure";

const ProfileHistory = ({ historyItems }) => {
  const approved = historyItems["Approuvé"];
  const closed = historyItems["Clôturé"];
  const pending = historyItems[`En attente d'approbation`];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Tab.Panel
      className={classNames(
        "bg-white rounded-xl p-3",
        "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60"
      )}
    >
      <HistoryDisclosure statusName="Approuvé" statusArray={approved}>
        <CheckCircleIcon className="w-5 h-5 text-gray-700" />
      </HistoryDisclosure>
      <HistoryDisclosure statusName="Clôturé" statusArray={closed}>
        <HandIcon className="w-5 h-5 text-gray-700" />
      </HistoryDisclosure>
      <HistoryDisclosure
        statusName="En attente d'approbation"
        statusArray={pending}
      >
        <ClockIcon className="w-5 h-5 text-gray-700" />
      </HistoryDisclosure>
    </Tab.Panel>
  );
};

export default ProfileHistory;
