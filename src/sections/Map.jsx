import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const Map = () => {
  return (
    <>
      <h1 className='text-5xl font-bold text-center mb-10'>Our Location</h1>
      <MapContainer
        center={[40.86701504484206, -73.81013174794911]}
        zoom={13}
        className='h-96'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <Marker position={[40.86701504484206, -73.81013174794911]}>
          <Popup>
            Pelham Bay Park Football Field
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Map
