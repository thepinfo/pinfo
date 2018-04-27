import React from 'react';
import './SubmitPin.css';

const SubmitPin = ({ onInputChange, onButtonSubmit }) => {
	  return (
  	    	<div>
	  	    	<div className='pa4 br3 shadow-5 form center'>
		  	    	<p className='f3 white'>
		  	    	{'Insert a pin in to the database:'}
		  	    	</p>
		  	    	<div className='center flex'>
		  	    		<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
		  	    		<button 
		  	    			className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
		  	    			onClick={onButtonSubmit}
		  	    		>Submit Pin</button>
  	    			</div>
  	    		</div>
  	    	</div>
	  	);
	}


export default SubmitPin;