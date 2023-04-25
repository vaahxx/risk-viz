import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmFhaHh4IiwiYSI6ImNsZ3ZqNmZmMjAyM24zb24zOHJiZWFhZXkifQ.gH1xGpoVKZy-PsnUCFcdCg";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
}
