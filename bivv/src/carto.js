import React from 'react';
import './carto.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Leaf from 'leaflet';
import depImg from './images/cible.png'
import destImg from './images/dest.png'
import QRCode from "react-qr-code";

const depIcon= new Leaf.Icon({
    iconUrl:depImg,
    iconSize:[30,30],
    
});

const destIcon= new Leaf.Icon({
    iconUrl:destImg,
    iconSize:[21,30],
    
});

class Carto extends  React.Component {
    constructor(props) {
      super(props);
    
        
      this.state = {
          
            dest:this.props.destination,
            dep:this.props.departure,
                 
      };
    }

    getBoundsZoomLevel(bounds, mapDim) {
        var WORLD_DIM = { height: 256, width: 256 };
        var ZOOM_MAX = 21;
    
        function latRad(lat) {
            var sin = Math.sin(lat * Math.PI / 180);
            var radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
            return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
        }
    
        function zoom(mapPx, worldPx, fraction) {
            return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
        }

        console.log(bounds);
    
        var ne = bounds.getNorthEast();
        var sw = bounds.getSouthWest();
    
        var latFraction = (latRad(ne.lat) - latRad(sw.lat)) / Math.PI;
    
        var lngDiff = ne.lng - sw.lng;
        var lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360;
    
        var latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
        var lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);
    
        return Math.min(latZoom, lngZoom, ZOOM_MAX);
    }
  
   
    render(){

        console.log(this.state.dest);
        console.log(this.state.dep);
        if(this.state.dest.hasOwnProperty('lat') && this.state.dest.hasOwnProperty('lon') && this.state.dest.hasOwnProperty('titre') && this.state.dest.hasOwnProperty('adresse'))
        {
            
        }else
        {
            return (" Aucune donnée");
        }

        
        let destinationLink=""+this.state.dest.lat+","+this.state.dest.lon+"";
        let googleLink="https://www.google.com/maps/dir/?api=1&origin="+this.state.dep.name+"&destination="+destinationLink+"&travelmode=walk";

        let centerCoord=[];

        let latdif=(this.state.dep.lat - this.state.dest.lat)/2;
        let longdif=(this.state.dep.lon - this.state.dest.lon)/2;

        let lat=0;
        let long=0;
        let zoom = 1;
        
        
        let corner1 = Leaf.latLng(this.state.dep.lat,this.state.dep.lon);
        let corner2 = Leaf.latLng(this.state.dest.lat,this.state.dest.lon);
        let bounds = Leaf.latLngBounds(corner1,corner2); 

                
        centerCoord[0]=bounds.getCenter().lat.toFixed(6);
        centerCoord[1]=bounds.getCenter().lng.toFixed(6);

        console.log(bounds);
        zoom = this.getBoundsZoomLevel(bounds,{height:300,width:750})

        return(
        <div className="carto">

             <div className='cartoDep' >
                <div className='cible'>
                    <svg width="100%" height="100%" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.8137 13.3636C17.6069 13.3636 14.1996 16.7809 14.1996 21C14.1996 25.2191 17.6069 28.6364 21.8137 28.6364C26.0205 28.6364 29.4278 25.2191 29.4278 21C29.4278 16.7809 26.0205 13.3636 21.8137 13.3636ZM38.8312 19.0909C37.9556 11.13 31.6549 4.81091 23.7172 3.93273V0H19.9102V3.93273C11.9725 4.81091 5.67187 11.13 4.79625 19.0909H0.875V22.9091H4.79625C5.67187 30.87 11.9725 37.1891 19.9102 38.0673V42H23.7172V38.0673C31.6549 37.1891 37.9556 30.87 38.8312 22.9091H42.7524V19.0909H38.8312V19.0909ZM21.8137 34.3636C14.4471 34.3636 8.48908 28.3882 8.48908 21C8.48908 13.6118 14.4471 7.63636 21.8137 7.63636C29.1803 7.63636 35.1384 13.6118 35.1384 21C35.1384 28.3882 29.1803 34.3636 21.8137 34.3636Z" fill="black"/>
                    </svg>
                </div>
                <div className='cartoDepText'>
                    {this.state.dep.name}
                    <br />
                    
                </div>
                
            </div>
            <br />
           <MapContainer style={{marginTop:"40px"}} center={centerCoord} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                <Marker position={[this.state.dep.lat,this.state.dep.lon]} icon={depIcon}>
                  <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
                        Vous êtes ici
                    </Tooltip>
                </Marker>
                <Marker position={[this.state.dest.lat,this.state.dest.lon]} icon={destIcon} >
                <Tooltip direction="bottom" offset={[0, 15]} opacity={1} permanent>
                        {this.state.dest.titre}
                    </Tooltip>
                </Marker>
            </MapContainer>

            <div className='cartoDepArret' >

                <div className='bus' >
                    <svg width="100%" height="100%" viewBox="0 0 28 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3092 0C6.86745 0 0.848633 6.1035 0.848633 13.65C0.848633 23.8875 14.3092 39 14.3092 39C14.3092 39 27.7698 23.8875 27.7698 13.65C27.7698 6.1035 21.751 0 14.3092 0ZM14.3092 18.525C11.6556 18.525 9.50188 16.341 9.50188 13.65C9.50188 10.959 11.6556 8.775 14.3092 8.775C16.9629 8.775 19.1166 10.959 19.1166 13.65C19.1166 16.341 16.9629 18.525 14.3092 18.525Z" fill="black"/>
                    </svg>
                </div>
               
                <div className='cartoDepArretText' >
                    {
                       this.state.dest.titre
                    }
                    <br />
                    {
                       this.state.dest.adresse
                    }
                       
                </div>

            </div>

            <div className='qrcodeCarto'>
                {/*} <img src={qrcode} alt="qrcode" /> */}
                <QRCode size="150" value={googleLink} />
            </div>

           
        </div>
                      
                  
                  
              
        );
    }
  }
  export default Carto;