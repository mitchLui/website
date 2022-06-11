import React, {useRef, useState, useEffect} from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import "./map.scss";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

export const Map = ({className, userLng, userLat}) =>{
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(userLng);
    const [lat] = useState(userLat);
    const [zoom] = useState(15.5);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <div>
            <div ref={mapContainer} className={className + " map-container"} />
        </div>
    );
}

