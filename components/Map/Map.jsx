import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  Marker,
  GoogleMap,
} from "react-google-maps";

export default function Map({ locations }) {
  const loadingElementStyle = { height: "100%" };
  const containerElementStyle = { height: "280px" };
  const mapElementStyle = { height: "100%" };
  const defaultCenter = { lat: 50.805351717528154, lng: 4.485815727154448 };
  const defaultOptions = { scrollwheel: false };
  const RegularMap = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={9}
        defaultCenter={defaultCenter}
        defaultOptions={defaultOptions}
      >
        {locations.map((loc) => {
          let latLng = new google.maps.LatLng(loc.lat, loc.lng);
          return <Marker key={latLng} position={latLng} />;
        })}
      </GoogleMap>
    ))
  );

  return (
    <RegularMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA45Tq4_HQ2Id-VVEnqeSod-D2wrxpa8zA "
      loadingElement={<div style={loadingElementStyle} />}
      containerElement={<div style={containerElementStyle} />}
      mapElement={<div style={mapElementStyle} />}
    />
  );
}
