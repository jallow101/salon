import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 33.736916, 
      lng: -84.386389
    },
    zoom: 15,
  };

  const handleApiLoaded = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: 33.736916, lng:  -84.386389 },
      map,
      title: "Divas Salon",
    });
    return marker;
  };

  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_API_KEY,
        }}
        layerTypes={["TrafficLayer"]}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={
          ({ map, maps }) => handleApiLoaded(map, maps)
          // Do whatever you want using the map, and maps objects
        }
        options={{
          styles: [
            {
              featureType: "all",
              stylers: [{ visibility: "on" }],
            },
          ],
        }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
