import { useState } from "react";
import ReactMapGL from "react-map-gl";
export default function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // The latitude and longitude of the center of London
    latitude: 51.5074,
    longitude: -0.1278,
    zoom: 10,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken="pk.eyJ1IjoibmluYWhldXplciIsImEiOiJja3gyZTJhazQwemluMm9xbG5sbDhiMXpwIn0.oSETsWBnEnRL9G9DV1e_hg"
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}
