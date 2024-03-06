"use client";
import { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./map.css";

export default function Map() {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };
  const center = useMemo(() => {
    return { lat: 47.620846191058924, lng: -122.19347104604529 };
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      : "",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="map-holder">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
      >
        <Marker
          position={center}
          title="Rolls & Rolls Sushi"
          label={{ text: "Rolls & Rolls Sushi", className: "map-marker-label" }}
        />
      </GoogleMap>
    </div>
  );
}
