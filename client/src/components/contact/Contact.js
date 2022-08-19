// import { Marker } from './Marker';
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-React';
const containerStyle = {
  // width: '400px',
  height: '400px',
};

const center = {
  lat: 43.21237550869029,
  lng: 27.91454315185547,
};
const marker = {
  lat: 43.21237550869029,
  lng: 27.91454315185547,
};
const zoom = 15;
export const Contact = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBiQc10_zujH2WN2DQdA2hlDbDMoT8lnG8',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    const zoomChangeBoundsListener =
      new window.google.maps.event.addListenerOnce(
        map,
        'bounds_changed',
        function (event) {
          if (this.getZoom()) {
            this.setZoom(zoom);
          }
        }
      );
    setTimeout(function () {
      new window.google.maps.event.removeListener(zoomChangeBoundsListener);
    }, 2000);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div className="container contact">
      <div className="row">
        <div className="col-md-12">
          <div className="contact-wrapper">
            <h3>Get In Touch With Us</h3>
            <p>
              Contact our travel experts anytime to get the best suggestions and
              information based on your preferences and lifestyle.
            </p>
            <div className="contact-map">
              <div className="map-area">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                  >
                    <Marker position={marker} zoom={{ zoom }} />
                  </GoogleMap>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
