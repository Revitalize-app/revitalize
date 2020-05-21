import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from '../Marker/Marker'



export default class GmapMap extends Component {
    constructor(props){
        super(props)
        
    }

    state = {
        lat:40.4167754,
        lng:-3.7037901999999576,
    }

    static defaultProps = {
        center: {
            lat: 40.4167754,
            lng: -3.7037901999999576
        },
        zoom: 16
    };

    handleDrag(e){
        console.log(e)

    }
    render() {
        const handleApiLoaded = (map, maps) => {
            // use map and maps objects
}
        return (
            <div style={{ height: '30vh', width: '100%', zIndex:0}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDIWdJ4o3I1-dUrUoErrs2TCeBfd2_oEBA" }}
                    defaultCenter={this.props.pos && this.props.pos}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    {this.props.marker&&
                    <Marker
                    lat={this.props.pos.coordinates}
                    lng={this.props.pos.coordinates}
                    draggable={true}
                    text="Dirty place"
                />
                    }
                    
                    
                </GoogleMapReact>
            </div>
        );
    }
}