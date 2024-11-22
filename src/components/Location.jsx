"use client";
import React from 'react'
import "leaflet/dist/leaflet.css";
import { TileLayer, MapContainer, Popup } from "react-leaflet";

export default function Location() {

    const center = { lat: 20, lng: 77 }
    //   const center = [20, 77]
    //   const bound = [[85, 180], [-85, -180]]
    const zoom = 14
    return (
        <div className='w-[90vw] h-[90vh]'>
            <MapContainer center={center} zoom={zoom} className="h-full" style={{ height: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Popup position={center}  >
                    <span className='text-red-500 text-lg'>hello</span>
                </Popup>
            </MapContainer>
        </div>
    )
}

// const showDataOnMap = () => {
//     return (<Circle
//         center={[center.lat, center.lng]}
//         fillOpacity={0.4}

//         color={casesTypeColors["cases"].hex}
//         fillColor={casesTypeColors["cases"].hex}

//         radius={
//             Math.sqrt(50 / 12) * casesTypeColors["cases"].multiplier
//         }
//     >
//         <Popup >
//             <div>
//                 <div class="flagPopup" />
//                 hello
//             </div>
//         </Popup>
//     </Circle>)
// }

// const casesTypeColors = {
//     cases: {
//         hex: "#CC1034",
//         multiplier: 600,
//     },
//     recovered: {
//         hex: "#7dd71d",
//         multiplier: 500,
//     },
//     deaths: {
//         hex: "#fb4443",
//         multiplier: 2000,
//     },
// };