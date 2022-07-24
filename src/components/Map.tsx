import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

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

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "API_KEY",
    libraries,
  });

  if (loadError) return <p className="text-red-500">Error loading map</p>;
  if (!isLoaded) return <p className="text-gray-500">Loading map...</p>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      ></GoogleMap>
    </div>
  );
};

export default Map;
