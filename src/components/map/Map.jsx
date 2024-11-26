import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Map() {
    const markerPosition = [7.06, 125.60];

    return (
        <MapContainer
            className="w-full h-[95vh]"
            center={markerPosition}
            zoom={28}
            scrollWheelZoom={false}
        >
            {/* <TileLayer
                attribution="bullseye map"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={markerPosition}>
                <Popup>
                    hello
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;