import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";


const LocationBadges = ({ locations }) => {
  return (
    <ul>
      {locations.map((location) => (
        <li className="opacity-80 px-2 py-1 relative top-10 left-3 inset-x-0 w-max z-10  bg-black text-white text-sm font-mono">
          <LocationMarkerIcon className="w-4 h-4 inline mr-1 mb-0.5"></LocationMarkerIcon>
          {location}
        </li>
      ))}
    </ul>
  );
};

export default LocationBadges;
