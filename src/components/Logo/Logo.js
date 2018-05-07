import React from 'react';
import brain from './brain.png';
import './Logo.css';



const Logo = () => {
	  return (
	  	    <div className='ma4 mt0 logo-div'>
  	                <img className='logoimg' alt='logo' src={brain}/>
            </div>
	  	);
	}


export default Logo;
