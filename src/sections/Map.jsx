import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import CustomMarker from '../assets/icons/marker-icon.png'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const customMarker = new L.Icon({
  iconUrl: CustomMarker,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const Map = () => {
  return (
    <>
      <h1 className='text-5xl font-bold text-center mb-10'>Our Location</h1>
      <div>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${40.86701504484206},${-73.81013174794911}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='bg-red-400 rounded-md p-1'>Get directions</button>
        </a>
      </div>

      <MapContainer
        center={[40.86701504484206, -73.81013174794911]}
        zoom={13}
        className='h-96 rounded-sm'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

  <Marker position={[40.86701504484206, -73.81013174794911]} icon={customMarker}>
          <Popup>Pelham Bay Park Football Field</Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Map
