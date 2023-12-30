import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'

type MapProps = {
    lat: number;
    lng: number;
}
const MapLocation: React.FC<MapProps> = ({ lat, lng }) => {
    return <MapContainer center={[lat, lng]}
        zoom={20}
        scrollWheelZoom={true}
        zoomControl={true} 
        >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
            <Popup>
                Here the location
            </Popup>
        </Marker>
    </MapContainer>
}


export default MapLocation