import React from 'react';
import './appuiBtn.css';

class AppuiBtn extends  React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
      
      
      this.handleChange=this.handleChange.bind(this);

    }
  
   
  
  
  
    
    handleChange(event){
      
     
      
    }
   
    render(){
        return(
            
          <div className="appuiBTN">
            <div className='ABTNTitle'>
              <div className='ABTNLogo'>
                <svg width="65" height="65" viewBox="0 0 95 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90.5 47C90.5 70.4273 71.2933 89.5 47.5 89.5C23.7067 89.5 4.5 70.4273 4.5 47C4.5 23.5727 23.7067 4.5 47.5 4.5C71.2933 4.5 90.5 23.5727 90.5 47Z" fill="#A2D3EE" stroke="#A2D3EE" stroke-width="9"/>
                <path d="M91 47C91 70.7376 71.5351 90 47.5 90C23.4649 90 4 70.7376 4 47C4 23.2624 23.4649 4 47.5 4C71.5351 4 91 23.2624 91 47Z" stroke="white" stroke-width="2"/>
                <path d="M47.5091 13.184C48.9811 13.184 50.1011 13.664 50.8691 14.624C51.7011 15.584 52.1171 16.832 52.1171 18.368C52.1171 19.84 51.5091 21.088 50.2931 22.112C49.0771 23.072 47.7331 23.552 46.2611 23.552C44.8531 23.552 43.7331 23.072 42.9011 22.112C42.1331 21.152 41.7491 19.968 41.7491 18.56C41.7491 17.088 42.3571 15.84 43.5731 14.816C44.7891 13.728 46.1011 13.184 47.5091 13.184ZM58.0691 80H38.6771V77.312H40.2131C41.9411 77.312 43.0291 77.024 43.4771 76.448C43.9891 75.872 44.2451 74.944 44.2451 73.664V44.864C44.2451 43.648 43.8291 42.784 42.9971 42.272C42.2291 41.696 40.7891 41.408 38.6771 41.408V38.72C39.9571 38.72 41.8771 38.272 44.4371 37.376C47.0611 36.416 49.0451 35.52 50.3891 34.688L52.1171 34.304V73.088C52.1171 74.112 52.1491 74.848 52.2131 75.296C52.3411 75.744 52.7251 76.192 53.3651 76.64C54.0051 77.088 54.9971 77.312 56.3411 77.312H58.0691V80Z" fill="white"/>
                </svg>

              </div>
              <div className='ABTNText' >
                  Vous avez une question ?
              </div>
            </div>
            <div className='ABTNDes'>
              <div className='ABTNDesTop'>
                  <div >Appuyez sur le bouton, je suis un assitant vocal !</div>
                  <svg style={{paddingTop:'15px'}} width="140" height="25" viewBox="0 0 186 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L93 37L183 3" stroke="#A2D3EE" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3 9L93 43L183 9" stroke="#A2D3EE" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    
              </div>
             
            </div>
            
        </div>      
                      
                  
                  
              
        );
    }
  }
  export default AppuiBtn;