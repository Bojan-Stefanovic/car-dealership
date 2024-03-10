/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";

function LocationMap({ coords, name, address }) {
  function MapUpdater({ coords }) {
    const map = useMap();

    useEffect(() => {
      map.flyTo(coords, map.getZoom(), {
        animate: true,
        duration: 2,
      });
    }, [coords, map]);

    return null;
  }
  return (
    <div className="flex justify-center item">
      <div
        className="mb-16 shadow-noOffset shadow-gray-600/30"
        style={{ height: "32rem", width: "100%", borderRadius: "8px" }}>
        <MapContainer
          center={coords}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%", borderRadius: "8px" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={coords}>
            <Popup>
              {name}
              <br />
              {address}
            </Popup>
          </Marker>
          <MapUpdater coords={coords} />
        </MapContainer>
      </div>
    </div>
  );
}

export default LocationMap;
