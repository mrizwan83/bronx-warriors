import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import CustomMarker from '../assets/icons/marker-icon.png';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customMarker = new L.Icon({
    iconUrl: CustomMarker,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const LocationMap = () => {
    return (
        <div id='location' className="w-full h-96">
            <MapContainer
                center={[40.84910001733011, -73.82295388835792]} // Bronx Warriors location coordinates
                zoom={15}
                scrollWheelZoom={false}
                className="h-full w-full rounded-lg"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[40.84910001733011, -73.82295388835792]} icon={customMarker}>
                    <Popup>
                        Bronx Warriors Pelham Bay Park
                        <br /> Middletown Road & Stadium Avenue
                        <br />
                        Bronx, NY 10465
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LocationMap;