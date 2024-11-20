// components/Location.jsx
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Location = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      const marker = L.marker([51.505, -0.09]).addTo(map);
      marker.bindPopup("Hello, I'm a marker!").openPopup();
    }

    return () => {
      if (mapRef.current) {
        mapRef.current._leaflet_id && mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      style={{ width: '100%', height: '500px' }}
    />
  );
};

export default Location;
