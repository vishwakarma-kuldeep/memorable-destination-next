// components/MapView.tsx
import { useRef } from "react";
import { useMap } from "../hooks/useMap";

export const MapView = () => {
  const access_token =
    "pk.eyJ1Ijoia3VsZGVlcHZpc2giLCJhIjoiY2x0anFqZTFjMG04eTJtcXdrcmk3dm0zNyJ9.fHnwyDwt9ooV8s-Y5n1jZw";
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useMap({
    containerRef: mapContainerRef,
    accessToken: access_token || import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
  });

  return <div ref={mapContainerRef} className="map" />;
};
