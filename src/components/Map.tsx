import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import mapStyles from "../MapStyles";

type LibraryTypes =
  | "places"
  | "drawing"
  | "geometry"
  | "localContext"
  | "visualization";

const libraries: LibraryTypes[] = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};

const center = {
  lat: 9.115295,
  lng: 7.472469,
};

const options: google.maps.MapOptions = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "API_KEY",
    libraries,
  });

  if (loadError) return <p className="text-red-500">Error loading map</p>;
  if (!isLoaded) return <p className="text-gray-500">Loading map...</p>;

  return (
    <div>
      <h1 className="absolute m-4 z-10 text-3xl">
        Hotspots
        <span role="img" aria-label="fire" className="ml-2">
          🔥
        </span>
      </h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
        options={options}
      ></GoogleMap>
    </div>
  );
};

export default Map;
