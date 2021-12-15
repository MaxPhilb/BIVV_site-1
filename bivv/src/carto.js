import React from 'react';
import './carto.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Leaf from 'leaflet';
import markerImg from './images/cible.png'
import QRCode from "react-qr-code";

const markerIcon= new Leaf.Icon({
    iconUrl:markerImg,
    iconSize:[30,30],
    
});

class Carto extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {
          centerCoord:[45.191077, 5.714149],
          destination:"Mc Donald's"
      };
      
      
    
    }
  
   
    render(){

        let googleLink="https://www.google.com/maps/dir/?api=1&origin=gare,grenoble&destination="+this.state.destination+",grenoble&travelmode=transit";

       
        return(
        <div className="carto">
            <div className='cartoDep' >

            </div>
           <MapContainer center={this.state.centerCoord} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                <Marker position={this.state.centerCoord} icon={markerIcon}>
                  <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
                        Vous êtes ici
                    </Tooltip>
                </Marker>
            </MapContainer>

            <div className='cartoDest' >

            </div>

            <div className='qrcodeIt'>
                {/*} <img src={qrcode} alt="qrcode" /> */}
                <QRCode size="150" value={googleLink} />
            </div>

           
        </div>
                      
                  
                  
              
        );
    }
  }
  export default Carto;