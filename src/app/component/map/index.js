"use client"

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const markers = [
      { position: [28.6139, 77.209], label: "New Delhi" },
      { position: [19.076, 72.8777], label: "Mumbai" },
      { position: [13.0827, 80.2707], label: "Chennai" },
      { position: [22.5726, 88.3639], label: "Kolkata" },
      { position: [12.9716, 77.5946], label: "Bangalore" },
];

const Map = () => {
      const [center, setCenter] = useState([20.5937, 78.9629]);

      return (
            <MapContainer center={center} zoom={5} style={{ height: "100vh", width: "100%" }}>
                  <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {markers.map((marker, id) => (
                        <Marker key={id} position={marker.position}>
                              <Popup>
                                    <button onClick={() => setCenter(marker.position)}>{marker.label}</button>
                              </Popup>
                        </Marker>
                  ))}
            </MapContainer>
      );
};

export default Map;