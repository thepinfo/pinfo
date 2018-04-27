import React from 'react';
import './DisplayPin.css';

const DisplayPin = ({ imageUrl }) => {
  	return (
    	<div className='center flex ma'>
    		<div className='absolute mt2'>
    			<img alt='pin' src={imageUrl} width='500px' height='auto' />	  
    		</div>	    	
    	</div>
  	);
}


export default DisplayPin;