import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const containerStyle = {
  width: "100px",
  height: "100px",
};

class Mymap extends Component {
  mapClicked(mapProps, map, clickEvent) {
    console.log(mapProps);
  }

  render() {
    return (
      <div>
        <Map
          mapContainerStyle={containerStyle}
          Center={{ lat: 51.506, lng: -0.169 }}
          onClick={this.mapClicked}
          google={this.props.google}
          zoom={14}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div></div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC-jtC-IVY6nch-Dj46BXn6HJA2FYOprAk",
})(Mymap);
