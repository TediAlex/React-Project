import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
const marker = {
    lat: 43.21237550869029, lng: 27.91454315185547
  }
export const Marker = (options) => {
    const [marker, setMarker] = React.useState();
  
    React.useEffect(() => {
      if (!marker) {
        setMarker(new window.google.maps.Marker());
      }
  
      // remove marker from map on unmount
      return () => {
        if (marker) {
          marker.setMap(null);
        }
      };
    }, [marker]);
    React.useEffect(() => {
      if (marker) {
        marker.setOptions(options);
      }
    }, [marker, options]);
    return null;
  };