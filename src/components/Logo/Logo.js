import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';



const Logo = () => {
	  return (
	  	    <div className='ma4 mt0 logo-div'>
	  	        <Tilt className="Tilt br2 shadow-2 logoimg" options={{ max : 55 }} >
	  	            <div className="Tilt-inner">
	  	                <img className='logoimg' alt='logo' src={brain}/>
	  	            </div>
	  	        </Tilt>
	  	    </div>
	  	);
	}


export default Logo;
